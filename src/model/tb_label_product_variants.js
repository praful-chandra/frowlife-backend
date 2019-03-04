/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_label_product_variants', {
		VariantID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		VariantSKU: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		VariantName: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		VariantStatus: {
			type: DataTypes.ENUM('draft','ready','removed'),
			allowNull: false
		},
		VariantMRP: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		VariantMainImage: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		VariantColor: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		VariantSize: {
			type: DataTypes.STRING(225),
			allowNull: false
		}
	}, {
		tableName: 'tb_label_product_variants'
	});
};
