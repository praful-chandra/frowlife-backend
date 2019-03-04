module.exports = (sequelize, DataTypes) => {
	var Cart = sequelize.define('cart', {
		cartID: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement : true
		},
		UserID: DataTypes.INTEGER,
		LastName: DataTypes.STRING,
		UserEmail: {
			type: DataTypes.STRING,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		UserPassHash: DataTypes.STRING,
		PhoneNum: DataTypes.STRING(20),
		Gender: {
			type : DataTypes.STRING(8),
			isIn: [['Male', 'Female','Others']]
		}
	});
	return Cart;
};