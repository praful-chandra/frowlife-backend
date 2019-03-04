
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('user', {
		UserID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement : true
		},
		FirstName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		LastName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		UserEmail: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		UserPassHash: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		PhoneNum: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		Gender: {
			type : DataTypes.STRING(8),
			allowNull: false,
			isIn: [['Male', 'Female','Others']]
		}
	}, {
		tableName: 'user'
	});
};