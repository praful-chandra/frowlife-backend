import {getConnection} from '../services/mysql';
import bcrypt from 'bcrypt';
const db  = require('../model');
export default class User {
	constructor() {
		this.saltRounds = 10;
	}
	getAddressDetails(UserEmail,AddressID){
		return new Promise((resolve, reject) => {
			try {
				let connection = getConnection();
				connection.query('select * from useraddress where UserEmailLink = ?  and AddressID = ?', [UserEmail,AddressID], function (error, results) {
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
	getAddress(UserEmail) {
		return new Promise((resolve, reject) => {
			try {
				let connection = getConnection();
				connection.query('select * from useraddress where UserEmailLink = ? ', UserEmail, function (error, results) {
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
	updateAddress(UserEmail, AddressID, AddressData) {
		return new Promise((resolve, reject) => {
			try {
				let connection = getConnection();
				let AddressInsertData = {
					UserEmailLink: UserEmail,
					FullAddress: AddressData.FullAddress,
					District: AddressData.District,
					City: AddressData.City,
					State: AddressData.State,
					PinCode: AddressData.PinCode
				};
				connection.query('update useraddress set ? where UserEmail=? and AddressID = ?', [AddressInsertData,UserEmail,AddressID], function (error, results) {
					if (error) {
						reject(error);
					} else {
						resolve('Updated the address successfully');
					}
				});
				connection.end();
			} catch (error) {
				reject(error);
			}
		});
	}
	deleteAddress(UserEmail, AddressID) {
		return new Promise((resolve, reject) => {
			try {
				let connection = getConnection();
				connection.query('delete from useraddress where UserEmail=? and AddressID = ?', [UserEmail,AddressID], function (error, results) {
					if (error) {
						reject(error);
					} else {
						resolve('Deleted the address successfully');
					}
				});
				connection.end();
			} catch (error) {
				reject(error);
			}
		});
	}
	addAddress(UserEmail, AddressData) {
		return new Promise((resolve, reject) => {
			try {
				
				let AddressInsertData = {
					UserEmailLink: UserEmail,
					FullAddress: AddressData.FullAddress,
					District: AddressData.District,
					City: AddressData.City,
					State: AddressData.State,
					PinCode: AddressData.PinCode
				};
				let connection = getConnection();
				connection.query('insert into useraddress set ?', AddressInsertData, function (error, results) {
					if (error) {
						reject(error);
					} else {
						resolve('Inserted the address successfully');
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
	 * @param {*} UserEmail
	 * @returns
	 * @memberof User
	 */
	getUserDetails(UserEmail) {
		return new Promise(function (resolve, reject) {
			try {
				let connection = getConnection();
				connection.query('select * from user where UserEmail = ?', UserEmail, function (error, results) {
					if (error) {
						reject(error);
					} else {
						if (results.length > 0) {
							resolve(results[0]);
						} else {
							reject(new Error('No user with the email ID found'));
						}
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
	 * @param {*} userData
	 * @returns
	 * @memberof User
	 */
	createUserAccoount(userData) {
		var that = this;
		return new Promise((resolve, reject) => {
			try {
				bcrypt.hash(userData.password, that.saltRounds)
					.then((hash) => {
						let user_insert_data = {
							FirstName: userData.firstname,
							LastName: userData.lastname,
							UserEmail: userData.email,
							UserPassHash: hash
						};
						db.user.create(user_insert_data).then((result)=>{
							console.log('created');
						}).catch((error)=>{
							console.log('error');
						});
						let connection = getConnection();
						connection.query('insert into user set ?', user_insert_data, function (error, results) {
							if (error) {
								reject(error);
							} else {
								resolve(results);
							}
						});
						connection.end();
					});
			} catch (error) {
				reject(error);
			}
		});
	}

}