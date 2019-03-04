/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_product_tags', {
		TagD: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		TagName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		TagSlug: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		TagDescription: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		TagImage: {
			type: DataTypes.STRING(2500),
			allowNull: false
		},
		TagIcon: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		TagParent: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CatID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'tb_product_tags'
	});
};
