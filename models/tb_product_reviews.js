/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_product_reviews', {
		ReviewID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		CuratorProductID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'tb_curator_products',
				key: 'curatorproductid'
			}
		},
		UserID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
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
		tableName: 'tb_product_reviews'
	});
};
