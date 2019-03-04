/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_label', {
		LabelID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		LabelName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		LabelEmail: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		LabelCompanyName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		LabelLogo: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		LabelSecEmail: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		LabelFName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		LabelLName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		LabelConTitle: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		LabelWebsite: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		LabelAbout: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		LabelContactNumber: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		LabelBillingAddress: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		LabelNote: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		LabelStatus: {
			type: DataTypes.ENUM('applied','review','approved','declined','banned'),
			allowNull: false
		}
	}, {
		tableName: 'tb_label'
	});
};
