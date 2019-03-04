import {Router} from 'express';
import User from '../controller/user';
import Responder from '../services/responder';
const responder = new Responder();
const db  = require('../model');
const admin_routes = Router();
const user_obj = new User();

admin_routes.route('/account')
	.post((req, res) => {
		user_obj.createUserAccoount(req.body).then((result) => {
			res.json({
				success: true,
				message: 'User account created successfully'
			});
		}).catch((error) => {
			res.json({
				success: false
			});
		});
	});
admin_routes.route('/label')
	.post((req,res) =>{
		db.label.create(req.body).then(()=>{
			responder.sendResponse(res,'','Label created successfully','success','less');
		}).catch(()=>{
			responder.sendResponse(res,'','Failed creating the product','error','less');
		});
	})
	.get((req,res)=>{
		db.label.findAll().then(labels => {
			responder.sendResponse(res,labels,'Successfully retrieved label list','success','full');
		}).catch(error =>{
			responder.sendResponse(res,error,'Failed retrieving label list','fail','less');
		});
	});
admin_routes.route('/label/:id')
	.get((req,res)=>{
		db.label.findById(req.params.id).then((data)=>{
			responder.sendResponse(res,data,'Successfully retrieved the label data','success','full');
		}).catch(()=>{
			responder.sendResponse(res,'','Failed retrieving the label data','fail','less');
		});
	})
	.put((req,res)=>{
		db.label.update(req.body,{
			where : {LabelID : req.params.id}
		}).then(()=>{
			responder.sendResponse(res,'','Successfully updated the label data','success','less');
		}).catch(()=>{
			responder.sendResponse(res,'','Failed updating the label data','fail','less');
		});
	})
	.delete((req,res)=>{
		db.label.destroy({
			where : {LabelID : req.params.id}
		}).then(()=>{
			responder.sendResponse(res,'','Successfully deleted the label data','success','less');
		}).catch(()=>{
			responder.sendResponse(res,'','Failed deleting the label data','fail','less');
		});
	});
admin_routes.route('/curator')
	.post((req,res) =>{
		db.curator.create(req.body).then(()=>{
			responder.sendResponse(res,'','curator created successfully','success','less');
		}).catch(()=>{
			responder.sendResponse(res,'','Failed creating the product','error','less');
		});
	})
	.get((req,res)=>{
		db.curator.findAll().then(curators => {
			responder.sendResponse(res,curators,'Successfully retrieved curator list','success','full');
		}).catch(error =>{
			responder.sendResponse(res,error,'Failed retrieving curator list','fail','less');
		});
	});
admin_routes.route('/curator/:id')
	.get((req,res)=>{
		db.curator.findById(req.params.id).then((data)=>{
			responder.sendResponse(res,data,'Successfully retrieved the curator data','success','full');
		}).catch(()=>{
			responder.sendResponse(res,'','Failed retrieving the curator data','fail','less');
		});
	})
	.put((req,res)=>{
		db.curator.update(req.body,{
			where : {curatorID : req.params.id}
		}).then(()=>{
			responder.sendResponse(res,'','Successfully updated the curator data','success','less');
		}).catch(()=>{
			responder.sendResponse(res,'','Failed updating the curator data','fail','less');
		});
	})
	.delete((req,res)=>{
		db.curator.destroy({
			where : {curatorID : req.params.id}
		}).then(()=>{
			responder.sendResponse(res,'','Successfully deleted the curator data','success','less');
		}).catch(()=>{
			responder.sendResponse(res,'','Failed deleting the curator data','fail','less');
		});
	});
module.exports = admin_routes;