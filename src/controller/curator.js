const db = require('../model');
import bcrypt from 'bcrypt';

/**
 *
 *
 * @export
 * @class Curator
 */
export default class Curator {
	constructor() {
		this.saltRounds = 10;
	}
	insertCurator(CuratorData) {
		var that = this;
		return new Promise((resolve, reject) => {
			bcrypt.hash(CuratorData.password, that.saltRounds)
				.then((hash)=>{
					delete CuratorData.password;
					CuratorData.CuratorHash = hash;
					CuratorData.CuratorStatus = 'approved';
					// console.log(CuratorData);
					db.tb_curator.create(CuratorData)
						.then(result =>{
							resolve(result);
						})
						.catch(error =>{
							reject(error);
						});
				})
				.catch((error)=>{
					reject(error);
				});
		});
	}
}