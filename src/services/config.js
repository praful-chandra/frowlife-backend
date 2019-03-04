import crypto from 'crypto';
var path = require('path');
var multer = require('multer');

export const config = {
	db: {
		host: process.env.DB_HOST,
		username: process.env.DB_USER,
		user:process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		dialect : 'mysql',
	},
	paths: {
		upload: './uploads',
		log: '../logs',
		certificate: '../ssl'
	},
	application :{
		tax : 15
	},
	token : {
		secret : crypto.pseudoRandomBytes(256),
		options : {
			expiresIn: 60 * 60,
			issuer: 'localhost'
		}
	},
	storage : multer.diskStorage({
		destination: function(req, file, callback) {
			callback(null, './uploads');
		},
		filename: function(req, file, callback) {
			callback(null, path.basename(file.originalname,path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname));
		}
	})
};