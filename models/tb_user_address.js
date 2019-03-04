/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_user_address', {
		AddressID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		UserEmailLink: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		AddressLine1: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		AddressLine2: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		FullAddress: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		District: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		City: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		State: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		PinCode: {
			type: DataTypes.STRING(7),
			allowNull: false
		},
		LastUpdate: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'tb_user_address'
	});
};
