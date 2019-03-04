import {getConnection} from '../services/mysql';
import { logger } from '../services/logger';
const db = require('../model');
/**
 *
 *
 * @export
 * @class Cart
 */
export default class Cart {

	constructor() {

	}
	verifyCouponOnCart(couponData,userID){
		return new Promise((resolve,reject)=>{
			try {
				db.tb_carts.findOne({
					include : [{
						model : db.tb_cart_lines , as : 'CartItem', include : [{
							model : db.tb_curator_products
						},{
							model : db.tb_curator_product_variants
						}]
					}],
					where :{
						userID : userID
					}
				}).then(result =>{
					logger.info(result);
					for(let cartItem in result.cartItem){
						logger.info(cartItem);
					}
				}).catch(error =>{
					reject(error);
				});
			} catch (error) {
				reject(error);
			}
		});
	}
	retrieveCouponCurator(coupon){
		return new Promise((resolve,reject)=>{
			try {
				db.tb_coupons.findOne({
					where : {
						Coupon : coupon
					}
				}).then(result => resolve(result)).catch(error => reject(error));
			} catch (error) {
				reject(error);
			}
		});
	}
	extractCartDetails(userID){
		return new Promise((resolve,reject)=>{
			try {
				console.log(1);
				resolve(1);
			} catch (error) {
				reject(error);
			}
		});
	}
	/**
	 *
	 *
	 * @param {*} userEmail
	 * @returns
	 * @memberof Cart
	 */
	getCartInfo(userEmail) {
		return new Promise(function (resolve, reject) {
			try {
				let connection = getConnection();
				let query = 'select * from cart where UserID = (select UserID from user where UserEmail = ?)';
				query = 'CALL getAllUsers(?)';
				connection.query(query,userEmail,  function (error, results, fields) {
					if (error) {
						reject(error);
					} else {
						resolve(results);
					}
				});
				connection.end();
			} catch (error) {
				reject(error);
			}
		});
	}

	/**
	 *
	 *
	 * @param {*} userEmail
	 * @param {*} productID
	 * @returns 
	 * @memberof Cart
	 */
	insertCartItem(userEmail, productID) {
		return new Promise(function (resolve, reject) {
			try {
				let cart_data = {
					userEmail: userEmail,
					ProdID: productID
				};
				let connection = getConnection();
				connection.query('insert into cart set ?', cart_data, function (error, results, fields) {
					if (error) {
						reject(error);
					} else {
						resolve(results);
					}
				});
				connection.end();
			} catch (error) {
				reject(error);
			}
		});
	}
}