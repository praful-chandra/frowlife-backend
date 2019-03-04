/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_order_lines', {
		OrderLineID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
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
