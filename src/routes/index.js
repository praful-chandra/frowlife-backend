import {Router} from 'express';
import User from '../controller/user';
import Authenticator from '../services/authenticator';
import Responder from '../services/responder';
import { logger } from '../services/logger';
var admin_routes = require('./admin');
var user_routes = require('./user');
var label_routes = require('./label');
var curator_routes = require('./curator');
import Cart from '../controller/cart';
const db = require('../model');

const router = Router();
const user_obj = new User();
const auth_obj = new Authenticator();
const responder = new Responder();
const cart = new Cart();
var path = require('path');
var multer = require('multer');


const storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './uploads');
	},
	filename: function(req, file, callback) {
		callback(null, path.basename(file.originalname,path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname));
	}
});

var upload = multer({ storage: storage});
router.use('/api/admin/',admin_routes);
router.use('/api/user/',user_routes);
router.use('/api/label/',label_routes);
router.use('/api/curator/',curator_routes);

/**Cart importance */

router.route('/cart')
	.post((req,res)=>{
		let cartData = req.body;
		db.tb_carts.create(cartData,{
			include : [
				{ model: db.tb_cart_lines, as: 'CartItem' }
			]
		}).then(result=>{
			responder.sendResponse(res,result,'Successfully added item to cart','success','less');
		}).catch(error=>{
			responder.sendResponse(res,error,'Successfully added item to cart','fail','less');
		});
		// res.json({success : true});
	});

router.route('/cart/:id')
	.post((req,res)=>{
		//Verify product stock 
		//Add coupon column to cart table
		let cartItem = req.body;
		cartItem.cartID = req.params.id;
		db.tb_cart_lines.create(req.body).then(result=>{
			responder.sendResponse(res,result,'Successfully added item to cart','success','less');
		}).catch(error=>{
			responder.sendResponse(res,error,'Failed adding item to cart','fail','less');
		});
	});

router.route('/coupon')
	.post((req,res)=>{
		let userID = 1;
		let coupon = req.body.coupon;
		cart.retrieveCouponCurator(coupon)
			.then(result => cart.verifyCouponOnCart(result,userID))
			.then(result=>{
				logger.info('Done');
			}).catch(error=>{
				logger.info('Fail');
			});
		
		db.tb_carts.update({
			CouponCode : coupon
		},{
			where : {
				userID : userID
			}
		}).then(result=>{
			responder.sendResponse(res,result,'Successfully applied coupon','success','less');
		}).catch(error=>{
			responder.sendResponse(res,error,'Failed applying coupon','fail','less');
		});;
	});
//Validate cart 

/**Order API */

router.route('/checkout')
	.post((req,res)=>{
		//Consider COupon referral code and then finalise
		let userID = 1;
		db.tb_carts.findOne({
			include : [{
				model : db.tb_cart_lines , as : 'CartItem', include : [{
					model : db.tb_curator_products
				},{
					model : db.tb_curator_product_variants
				}]
			}],
			where :{
				CartID : req.body.cartid,
				userID : userID
			}
		}).then(result =>{
			logger.info(result);
			res.json(result);
			let checkout_data = [];
			for(let product in result.CartItem){
				if(product.tb_curator_product.CuratorProductStock >= product.Quantity){
					checkout_data.push(product);
				}else{
					res.json({'success' : 'false'});
				}
			}
		}).catch(error =>{
			res.json(error);
			logger.error(error);
		});
		//Retreive cart data for that user

		// let OrderData = req.body;
		// OrderData.OrderStatus = 'Pending';
		// let  OrderProdData = [];
		// let OrderCuratorProdID = [];
		// for(let product in OrderData.OrderItem){
		// 	//verify the price of the product and check if any coupon is applied try applying again
		// 	OrderCuratorProdID.push(OrderData.OrderItem[product].ProductVariantID);
		// 	console.log(OrderData.OrderItem[product]);
		// }
		// db.tb_curator_product_variants.findAll({
		// 	where : {
				
		// 	}
		// });
		// //Calculate the total after applying discount etc. compare with total from UI any difference send it back before continuing with payment
		// db.tb_orders.create(OrderData,{
		// 	include : [
		// 		{ model: db.tb_order_lines, as: 'OrderItem' }
		// 	]
		// }).then(result=>{
		// 	console.log(result);
		// 	res.json({success : true});
		// }).catch(error=>{
		// 	console.log(error);
		// 	res.json({success :false});
		// });
	});

router.route('/upload')
	.post(upload.single('avatar'), (req, res) =>{
		// req.file is the `avatar` file
		// req.body will hold the text fields, if there were any
		res.json({success : true});
	});
router.route('/multiupload')
	.post(upload.array('avatar',5), (req, res)=> {
		// req.file is the `avatar` file
		// req.body will hold the text fields, if there were any
		console.log(req.files);
		res.json({success : true});
	});

router.route('/account')
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
router.route('/authenticate')
	.get((req, res)=> {
		auth_obj.generateSession('test@example.com', '123456')
			.then((data) => {
				res.json({
					success: true,
					token: data
				});
			}).catch((error) => {
				res.status(401).json({
					success: false,
					message: 'Wrong credentials'
				});
			});
	})
	.post((req, res) => {
		auth_obj.generateSession(req.body.email, req.body.pass)
			.then((data) => {
				res.json({
					success: true,
					token: data
				});
			}).catch((error) => {
				res.status(401).json({
					success: false,
					message: 'Wrong credentials'
				});
			});
	});

module.exports = router;