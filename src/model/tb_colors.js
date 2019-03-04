/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_colors', {
		ColorID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ColorName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		ColorHexCode: {
			type: DataTypes.STRING(10),
			allowNull: false
		}
	}, {
		tableName: 'tb_colors'
	});
};
