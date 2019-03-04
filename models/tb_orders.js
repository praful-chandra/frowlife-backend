/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_orders', {
		OrderID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		OrderNumber: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		UserID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'tb_users',
				key: 'userid'
			}
		},
		OrderValue: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		AdjustedValue: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		OrderStatus: {
			type: DataTypes.ENUM('ordered','confirmed','shipped','delivered','closed','partial','cancelled'),
			allowNull: false
		},
		CartID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CouponUsed: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		OrderTotal: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		OrderDiscount: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		OrderedOn: {
			type: DataTypes.DATE,
			allowNull: false
		},
		ShippingCharges: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		TotalTax: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		TotalQty: {
			type: DataTypes.INTEGER(11),
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
		Area: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		City: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		State: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		PinCode: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		PaymentMode: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		TransactionID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'tb_orders'
	});
};
