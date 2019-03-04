/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_products_gallery', {
		ImageID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		LabelProductID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'tb_label_products',
				key: 'labelproductid'
			}
		},
		LabelVariantID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'tb_label_product_variants',
				key: 'variantid'
			}
		},
		CuratorProductID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'tb_curator_products',
				key: 'curatorproductid'
			}
		},
		CuratorVariantID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'tb_curator_product_variants',
				key: 'curatorvariantid'
			}
		},
		ImageType: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		ImageName: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		ImagePath: {
			type: DataTypes.STRING(5000),
			allowNull: false
		},
		ImageHeight: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ImageWidth: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ImageSize: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CreatedBy: {
			type: DataTypes.ENUM('label','curator'),
			allowNull: false
		},
		CreatedByID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CreatedOn: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'tb_products_gallery'
	});
};
