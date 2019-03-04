/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_label_sizeinfo', {
		LabelSizeID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		LabelID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'tb_label',
				key: 'labelid'
			}
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
