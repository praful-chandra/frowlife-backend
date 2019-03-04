import {Router} from 'express';
// import {logger} from '../services/logger';
import Responder from '../services/responder';
import Label from '../controller/label';
import {config} from '../services/config';
import { logger } from '../services/logger';

var multer = require('multer');

const label_obj = new Label();
const db = require('../model');
const responder = new Responder();
const label_route = Router();

var imgupload = multer({ storage: config.storage});
var sizeOf = require('image-size');

// Admin routes
label_route.route('/label')
	.get((req, res) => {
		db.tb_label.findAll()
			.then(labels =>{
				responder.sendResponse(res,labels,'Successfully retrieved label list','success','full');
			})
			.catch((error)=>{
				responder.sendResponse(res,error,'Failed retrieving label list','fail','less');
			});
	})
	.post(imgupload.single('LabelLogoImg'),(req,res)=>{
		try {
			let labelInsertData = req.body;
			labelInsertData.LabelLogo = req.file.path;
			logger.debug(labelInsertData);
			label_obj.insertLabel(labelInsertData)
				.then(result =>{
					responder.sendResponse(res,result,'Successfully created label','success','less');
				})
				.catch(error =>{
					responder.sendResponse(res,error,'Failed creating label','fail','less');
				});
		} catch (error) {
			logger.error(error);
			res.json({success : false});
		}
	});

/**Inserting a new Label product */
label_route.route('/product')
	.post(imgupload.array('labelimg',5),(req,res)=>{
		let labelProdData = JSON.parse(req.body.productData);
		labelProdData.tbLabelLabelID = labelProdData.LabelID;
		labelProdData.LabelProductImage = [];
		delete labelProdData.LabelID;
		for(let elem in req.files){
			let dimensions = sizeOf(req.files[elem].path);
			let temp_data = {
				'ImageType' : 'jpg',
				'ImageName' : 'Label Image',
				'ImagePath' : req.files[elem].path,
				'ImageHeight' : dimensions.height,
				'ImageWidth' : dimensions.width,
				'ImageSize' : req.files[elem].size
			};
			labelProdData.LabelProductImage.push(temp_data);
		}
		logger.debug(labelProdData);
		db.tb_label_products.create(labelProdData,{
			include : [
				{ model: db.tb_label_product_variants, as: 'LabelProductVariant' },
				{ model: db.tb_label_products_gallery, as: 'LabelProductImage' }
			]
		}).then((result) =>{
			responder.sendResponse(res,result,'Successfully created label product','success','more');
		}).catch((error)=>{
			responder.sendResponse(res,error,'Failed creating label','fail','less');
		});
	});

// Admin and Label route
label_route.route('/label/:id')
	.get((req,res)=>{
		label_obj.retrieveLabelProductCategories(req.params.id).then(result=>{
			res.json(result);
			logger.info(result);
		}).catch(error=>{
			logger.error(error);
			res.json(error);
		});
	})
	.put((req,res)=>{
		db.tb_label.update(req.body,
			{ where: { LabelID : req.params.id }})
			.then(result =>{
				responder.sendResponse(res,result,'Successfully updated label details','success','less');
			})
			.catch((error)=>{
				responder.sendResponse(res,error,'Failed updating label details','error','less');
			});
	});


module.exports = label_route;