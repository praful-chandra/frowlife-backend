/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_curator_product_reviews', {
		ReviewID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Rating: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Comment: {
			type: DataTypes.STRING(5000),
			allowNull: false
		},
		CreatedOn: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'tb_curator_product_reviews'
	});
};
