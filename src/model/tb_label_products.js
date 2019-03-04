/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_label_products', {
		LabelProductID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		LabelProductName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		LabelProductDesc: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		LabelProductImg: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		LabelProductSKU: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		LabelProductStatus: {
			type: DataTypes.ENUM('draft','ready','removed'),
			allowNull: false
		},
		LabelProductMRP: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		LabelProductMainImage: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		LabelProductCategories: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		LabelProductTags: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		LabelProductType: {
			type: DataTypes.ENUM('single','variant'),
			allowNull: false
		},
		LabelProductRating: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'tb_label_products'
	});
};
