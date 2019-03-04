import * as jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../controller/user';
import bcrypt from 'bcrypt';
import { logger } from './logger';
import {config} from './config';
var user_obj = new User();
const db  = require('../model');

/**
 *
 *
 * @export
 * @class Authenticator
 */
export default class Authenticator {

	/**
	 *Creates an instance of Authenticator.
	 * @memberof Authenticator
	 */
	constructor() {
		this.options = {
			expiresIn: 60 * 60,
			issuer: 'localhost'
		};
		this.secret = crypto.pseudoRandomBytes(256);
	}

	/**
	 *	Extracts the token verifies it and stores decoded token in req.decoded_token
	 *
	 * @param {*} req
	 * @param {*} res
	 * @param {*} next
	 * @memberof Authenticator
	 */
	verifyToken(req, res, next) {
		jwt.verify(req.headers['x-auth-token'],config.token.secret,config.token.options,function(err,decoded){
			if(err){
				res.status(401).json({
					success: false,
					message: 'Unable to process the request'
				});
			}else{
				req.decodedToken = decoded;
				next();
			}
		});
	}

	/**
	 * Verifies user with their credentials and creates a token 
	 *
	 * @param {*} userEmail
	 * @param {*} userPass
	 * @returns
	 * @memberof Authenticator
	 */
	generateSession(userEmail, userPass) {
		logger.info('Login request recieved for ' + userEmail);
		var that = this;
		return new Promise(function (resolve, reject) {
			try {
				db.user.findAll({
					where :{
						UserEmail : userEmail
					}
				}).then((results)=> bcrypt.compare(userPass, results[0].UserPassHash)
					.then((res) => that.createToken(res, userEmail, resolve, reject))
				).catch((error)=>{
					logger.error('Login request failed for ' + userEmail);
					logger.error(error);
					reject(error);
				});
				// user_obj.getUserDetails(userEmail)
				// 	.then((userData) => bcrypt.compare(userPass, userData.UserPassHash)
				// 		.then((res) => that.createToken(res, userEmail, resolve, reject))
				// 	)
				// 	.catch((error) => {
				// 		logger.error('Login request failed for ' + userEmail);
				// 		logger.error(error);
				// 		reject(error);
				// 	});
			} catch (error) {
				logger.error('Login request failed for ' + userEmail);
				logger.error(error);
				reject(error);
			}
		});
	}

	/**
	 *
	 *
	 * @param {*} isValidUser
	 * @param {*} userEmail
	 * @param {*} resolve
	 * @param {*} reject
	 * @memberof Authenticator
	 */
	createToken(isValidUser, userEmail, resolve, reject) {
		try {
			if (isValidUser) {
				let payloadData = {
					email: userEmail
				};
				let token = jwt.sign(payloadData, config.token.secret,config.token.options);
				resolve(token);
			} else {
				logger.error('Login request failed for ' + userEmail);
				reject('Wrong Credentials');
			}
		} catch (error) {
			logger.error('Login request failed for ' + userEmail);
			reject(error);
		}
	}
}