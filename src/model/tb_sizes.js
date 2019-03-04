/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_sizes', {
		sizeID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		catIDs: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		sizeName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		sizeValue: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'tb_sizes'
	});
};
