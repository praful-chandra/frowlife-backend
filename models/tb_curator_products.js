/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_curator_products', {
		CuratorProductID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		LabelProductID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CuratorProductName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		CuratorProductSlug: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		CuratorProductDesc: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		CuratorProductImg: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		CuratorProductMRP: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		CuratorProductSalePrice: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		CuratorProductStock: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		FullmentID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CuratorProductMainImage: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		CuratorProductCategories: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		CuratorProductTags: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		CuratorProductRating: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CuratorID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'tb_curator',
				key: 'curatorid'
			}
		}
	}, {
		tableName: 'tb_curator_products'
	});
};
