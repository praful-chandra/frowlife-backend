module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('user', {
		UserID: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement : true
		},
		FirstName: DataTypes.STRING,
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
	return User;
};