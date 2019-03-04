/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('curatoraddress', {
		CuratorAddressID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
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
		tableName: 'curatoraddress'
	});
};