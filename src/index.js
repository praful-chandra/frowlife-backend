
import express from 'express';
import bodyParser from 'body-parser';

import https from 'https';
// import http from 'http';
import helmet from 'helmet';
import morgan from 'morgan';
// import Authenticator from './services/authenticator';
// import uuidv4 from 'uuid/v4';
import fs from 'fs';
import {logger} from './services/logger';
import cookieParser from 'cookie-parser';

const certificate = {
	key: fs.readFileSync('../ssl/nextgen.key'),
	cert: fs.readFileSync('../ssl/nextgen_certificate_decoded.cer')
};

var router = require('./routes');
// const auth_obj = new Authenticator();
const app = express();
app.use(bodyParser.json());
app.use(morgan('dev', { stream: logger.stream }));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser());
app.use(helmet.frameguard({action : 'deny'}));

app.server = https.createServer(certificate,app);

// app.server = http.createServer(app);
// app.all('/api/*', (req,res,next)=>{
// 	auth_obj.verifyToken(req,res,next);
// });
// app.all('/api/*',auth_obj.verifyToken.bind(auth_obj));
app.use('/', router);
/**
 * Error Handling
 * 
 */

//404 Not found handler
app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// 50x handler
app.use((err, req, res, next) => {
	res.status(err.status >= 100 && err.status < 600 ? err.status : 500).json({
		message: err.message
	});
});


app.server.listen(process.env.PORT, () => {
	logger.info('Server started at port : ' + process.env.PORT);
});