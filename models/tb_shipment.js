/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_shipment', {
		ShipmentID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		OrderID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'tb_orders',
				key: 'orderid'
			}
		},
		CuratorID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'tb_shipment'
	});
};
