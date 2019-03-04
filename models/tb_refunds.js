/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_refunds', {
		RefundID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		RefundOrderID: {
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
		RefundCreated: {
			type: DataTypes.DATE,
			allowNull: false
		},
		OrderLineIDs: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		RefundQtys: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		RefundAmount: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		ShipmentID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		TransactionID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'tb_transactions',
				key: 'transactionid'
			}
		},
		RefundReason: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		OrderAdjustments: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		RefundStaus: {
			type: DataTypes.ENUM('requested','approved','picked','received','paid'),
			allowNull: false
		},
		RefundedOn: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'tb_refunds'
	});
};
