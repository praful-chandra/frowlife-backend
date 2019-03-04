/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_order_lines', {
		OrderLineID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		OrderID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'tb_orders',
				key: 'orderid'
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
		LabelProductID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'tb_label_products',
				key: 'labelproductid'
			}
		},
		OrderItemMRP: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		OrderItemPrice: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		OrderItemStatus: {
			type: DataTypes.ENUM('ordered','confirmed','shipped','delivered','closed','partial','cancelled'),
			allowNull: false
		},
		OrderItemQty: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		FullmentID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CuratorProductVariantID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'tb_curator_product_variants',
				key: 'curatorvariantid'
			}
		},
		ProductSize: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		ProductColor: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		ProductShippingFee: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		ProductTax: {
			type: DataTypes.DECIMAL,
			allowNull: false
		}
	}, {
		tableName: 'tb_order_lines'
	});
};
