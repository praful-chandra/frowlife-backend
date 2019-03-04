/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_label_sizeinfo', {
		LabelSizeID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		CatIDs: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		sizeImage: {
			type: DataTypes.STRING(2500),
			allowNull: false
		},
		sizeDesc: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'tb_label_sizeinfo'
	});
};
