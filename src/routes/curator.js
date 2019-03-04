import {Router} from 'express';
// import {logger} from '../services/logger';
import Responder from '../services/responder';
import Curator from '../controller/curator';
import {config} from '../services/config';
import { logger } from '../services/logger';
import Label from '../controller/label';
var multer = require('multer');

const curator_obj = new Curator();
const db = require('../model');
const responder = new Responder();
const curator_route = Router();

var imgupload = multer({ storage: config.storage});
var sizeOf = require('image-size');
const label_obj = new Label();

curator_route.route('/account')
	.post((req,res)=>{
		curator_obj.insertCurator(req.body).then(result=>{
			responder.sendResponse(res,result,'Successfully created curator account','success','more');
		}).catch(error=>{
			responder.sendResponse(res,error,'Failed creating curator account','fail','less');
		});
	});
curator_route.route('/product')
	.post(imgupload.array('curatorimg',5),(req,res)=>{
		try {
			label_obj.retrieveLabelProductCategories(JSON.parse(req.body.productData).LabelProductID)
				.then(result=>{
					let curatorProdData = JSON.parse(req.body.productData);
					curatorProdData.tbCuratorCuratorID = curatorProdData.CuratorID;
					curatorProdData.tbLabelProductLabelProductID = curatorProdData.LabelProductID;
					curatorProdData.CuratorProductCategory = result.LabelProductCategory;
					delete curatorProdData.LabelProductID;
					delete curatorProdData.CuratorID;
					curatorProdData.CuratorProductImage = [];
					for(let elem in req.files){
						let dimensions = sizeOf(req.files[elem].path);
						let temp_data = {
							'ImageType' : 'jpg',
							'ImageName' : 'Curator Image',
							'ImagePath' : req.files[elem].path,
							'ImageHeight' : dimensions.height,
							'ImageWidth' : dimensions.width,
							'ImageSize' : req.files[elem].size
						};
						curatorProdData.CuratorProductImage.push(temp_data);
					}
					db.tb_curator_products.create(curatorProdData,{
						include : [
							{ model: db.tb_curator_product_variants, as: 'CuratorProductVariant' },
							{ model: db.tb_curator_products_gallery, as: 'CuratorProductImage' },
							{ model: db.tb_curator_product_categories, as: 'CuratorProductCategory' }
						]
					}).then(result =>{
						responder.sendResponse(res,result,'Successfully created curator product','success','more');
					}).catch(error=>{
						logger.error('Error in sequqlize inside'+error);
						responder.sendResponse(res,error,'Failed creating curator product','fail','less');	
					});
				}).catch(error =>{
					logger.error('Error in catch inside'+error);
					responder.sendResponse(res,error,'Failed creating curator product','fail','less');
					logger.error(error);
				});
		} catch (error) {
			logger.error('Error in catch'+error);
			responder.sendResponse(res,error,'Failed creating curator product','fail','less');
		}
	});

module.exports = curator_route;