/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_carts', {
		CartID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		UserID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ProductInfo: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		CreatedOn: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'tb_carts'
	});
};
