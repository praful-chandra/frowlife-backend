/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_fullfillment', {
		FullmentID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		PartnerID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		FullmentName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		FullmentCharges: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		FullmentDays: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		FullmentDesc: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		FullmentNote: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		FullmentPriceMin: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		FullmentPriceMax: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		ProductCategories: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		PinCodes: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'tb_fullfillment'
	});
};
