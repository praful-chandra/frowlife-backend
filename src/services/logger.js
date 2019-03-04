import { createLogger, format, transports } from 'winston';
import {config} from './config';
import DailyRotateFile from 'winston-daily-rotate-file';
require('winston-mongodb');

let opts = {
	filename: 'application-%DATE%.log',
	datePattern: 'YYYY-MM-DD-HH',
	dirname : config.paths.log,
	zippedArchive: true,
	maxSize: '20m',
	maxFiles: '14d'
  };
let console_opts = {
	colorize : true,
	format : format.combine(
		format.colorize({
			all: true
		}),
		format.simple()
	)
};
const logger = createLogger({
	transports: [
		new transports.Console(console_opts),
		new transports.File({
			filename: 'errors.log',
			level: 'error'
		}),
		// new transports.MongoDB({
		// 	db: 'mongodb://localhost:27017/logger',
		// 	collection : 'logs'
		// }),
		new DailyRotateFile(opts)
	],    
});
logger.stream = {
	write: function(message, encoding) {
		var regex = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
		message = message.replace(regex, '');
		message = message.replace(/\n/g, '');
		logger.log('info', message);
	}
};

export { logger };
