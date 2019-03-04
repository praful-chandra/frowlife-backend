/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_curator_products_gallery', {
		ImageID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ImageType: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		ImageName: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		ImagePath: {
			type: DataTypes.STRING(5000),
			allowNull: false
		},
		ImageHeight: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ImageWidth: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ImageSize: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'tb_curator_products_gallery'
	});
};
