/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var tb_curator= sequelize.define('tb_curator', {
		CuratorID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		CuratorName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		CuratorEmail: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		CuratorHash: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		CuratorAuth: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		CuratorCompanyName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		CuratorLogo: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		CuratorSecEmail: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		CuratorFName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		CuratorLName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		CuratorConTitle: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		CuratorAbout: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		CuratorContactNumber: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		CuratorStatus: {
			type: DataTypes.ENUM('applied','review','approved','declined'),
			allowNull: false
		},
		CuratorNote: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'tb_curator'
	});
	// tb_curator.associate = function(models) {
	// 	models.tb_curator.hasMany(models.tb_curator_address);
	// };
	return tb_curator;
};
