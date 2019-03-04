/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_curator_product_variants', {
		CuratorVariantID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		CuratorVariantSalePrice: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		CuratorVariantStock: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CuratorVariantMainImg: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		CuratorVariantDesc: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		CuratorVariantName: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		CuratorVariantSlug: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		CuratorVariantColor: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		CuratorVariantSize: {
			type: DataTypes.STRING(225),
			allowNull: false
		}
	}, {
		tableName: 'tb_curator_product_variants'
	});
};
