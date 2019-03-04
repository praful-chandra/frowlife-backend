/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_cart_lines', {
		CartLineID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		Quantity: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		UnitPrice: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		TotalPrice: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'tb_cart_lines'
	});
};
