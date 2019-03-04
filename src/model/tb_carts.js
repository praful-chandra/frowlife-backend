/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_carts', {
		CartID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		CouponCode: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'tb_carts'
	});
};
