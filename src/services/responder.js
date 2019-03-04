import { logger } from './logger';

export default class Responder {
	constructor() {
		this.mode = 'less';
		this.type = 'success';
		this.successMessage = 'Request processed correctly';
		this.failMessage = 'Unable to process the request';
	}


	/**
	 * 
	 *
	 * @param {*} response res object from express route
	 * @param {*} data data to pass 
	 * @param {*} message message to print in console and to send in response 
	 * @param {*} type success or error
	 * @param {*} mode less or full
	 * @memberof Responder
	 */
	
	sendResponse(response, data,message, type, mode) {
		this.mode = mode != null ? mode : this.mode;
		this.type = type != null ? type : this.type;
		this.successMessage = message  != null ? message : this.successMessage;
		this.failMessage = message  != null ? message : this.failMessage;
		if(this.type == 'success'){
			logger.info({
				success: true,
				message: this.successMessage,
				data: data
			});
			if (this.mode == 'less') {
				response.json({
					success: true,
					message: this.successMessage
				});
			} else {
				response.json({
					success: true,
					message: this.successMessage,
					data: data
				});
			}
		}else{
			logger.error({
				success: false,
				message: this.failMessage,
				data: data
			});
			if (this.mode == 'less') {
				
				response.status(500).json({
					success: false,
					message: this.failMessage,
					data: data
				});
			} else {
				response.status(500).json({
					success: false,
					message: this.failMessage,
					data: data
				});
			}
		}
	}
}