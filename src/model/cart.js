/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('cart', {
		cartID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		UserID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ProdID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		quantity: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'cart'
	});
};