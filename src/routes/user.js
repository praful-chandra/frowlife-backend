import {Router} from 'express';
import Cart from '../controller/cart';
import User from '../controller/user';
import Responder from '../services/responder';
import { logger } from '../services/logger';
const db  = require('../model');
const responder = new Responder();
const user_route = Router();
const cart_obj = new Cart();
const user_obj = new User();
user_route.route('/cart')
	.get((req, res) => {
		db.tb_user.findAll({
			include : [db.tb_user_address]
		}).then((results)=>{
			logger.info(results);
		}).catch((error)=>{
			logger.error(error);
		});
		cart_obj.getCartInfo(req.decodedToken.email)
			.then((data)=>{
				res.json({success : true, message : data});
				logger.info(data);
			})
			.catch((error)=>{
				logger.error(error);
				res.json({success : false});
			});
	})
	.post((req, res) => {

	});
user_route.route('/address')
	.get((req, res) => {
		logger.info(req.query);
		user_obj.getAddress(req.decodedToken.email)
			.then((data) => {
				responder.sendResponse(res,data,'success','full');
			})
			.catch((error) => {
				responder.sendResponse(res,error,'fail','less');
			});
	})
	.post((req, res) => {
		user_obj.addAddress(req.decodedToken.email, req.body)
			.then((message) => {
				res.json({
					success: true,
					message: message
				});
			})
			.catch((error) => {
				res.json({
					success: false
				});
			});
	});

user_route.route('/address/:name/:id')
	.get((req, res) => {
		user_obj.getAddressDetails(req.decodedToken.email,req.params.id)
			.then((data)=>{
				responder.sendResponse(res,data,'success','full');
			})
			.catch((error) => {
				responder.sendResponse(res,error,'fail','less');
			});
	})
	.put((req, res) => {
		user_obj.updateAddress(req.decodedToken.email,req.params.id,req.body)
			.then((data)=>{
				responder.sendResponse(res,data,'success','less','Successfully updated the address');
			})
			.catch((error) => {
				responder.sendResponse(res,error,'fail','less');
			});
	})
	.delete((req, res) => {
		user_obj.deleteAddress(req.decodedToken.email,req.params.id)
			.then((data)=>{
				responder.sendResponse(res,data,'success','less','Successfully deleted the address');
			})
			.catch((error) => {
				responder.sendResponse(res,error,'fail','less');
			});
	});

module.exports = user_route;