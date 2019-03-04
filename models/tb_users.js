/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_users', {
		UserID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		FirstName: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		LastName: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		UserEmail: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		UserPassHash: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		PhoneNum: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		Gender: {
			type: DataTypes.STRING(8),
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'tb_users'
	});
};
