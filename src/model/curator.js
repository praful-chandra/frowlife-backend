/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('curator', {
		CuratorID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		CuratorName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		CuratorEmail: {
			type: DataTypes.STRING(250),
			allowNull: false
		}
	}, {
		tableName: 'curator'
	});
};