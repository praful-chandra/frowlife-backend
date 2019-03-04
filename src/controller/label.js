const db = require('../model');
import bcrypt from 'bcrypt';

/**
 *
 *
 * @export
 * @class Label
 */
export default class Label {
	constructor() {
		this.saltRounds = 10;
	}
	retrieveLabelProductCategories(LabelProductID){
		return new Promise((resolve,reject)=>{
			db.tb_label_products.findAll({
				include : [{ model: db.tb_label_product_categories, as: 'LabelProductCategory' }],
				where : {
					LabelProductID : LabelProductID
				}
			}).then(result =>{
				console.log(result.LabelProductCategory);
				resolve(result[0]);
			}).catch(error=>{
				reject(error);
			});
		});
	}
	insertLabel(LabelData) {
		var that = this;
		return new Promise((resolve, reject) => {
			bcrypt.hash(LabelData.password, that.saltRounds)
				.then((hash)=>{
					delete LabelData.password;
					LabelData.LabelPassHash = hash;
					// console.log(LabelData);
					db.tb_label.create(LabelData)
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