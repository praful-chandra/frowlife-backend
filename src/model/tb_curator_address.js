/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_curator_address', {
		CuratorAddressID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		AddressName: {
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
		tableName: 'tb_curator_address'
	});
};
