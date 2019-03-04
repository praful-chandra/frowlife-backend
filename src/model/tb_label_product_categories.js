/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_label_product_categories', {
		CatID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		CatName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		CatSlug: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		CatDescription: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		CatImage: {
			type: DataTypes.STRING(2500),
			allowNull: false
		},
		CatIcon: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		CatParent: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'tb_label_product_categories'
	});
};
