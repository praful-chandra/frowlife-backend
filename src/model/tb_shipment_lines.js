/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_shipment_lines', {
		ShipmentLineID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		FullmentID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ShipmentValue: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ShipmentQtys: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ShipmentStatus: {
			type: DataTypes.ENUM('ready','picked','shipped','delivered'),
			allowNull: false
		},
		ShipmentPartner: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		ShipmentPartnerTracker: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		ShipmentType: {
			type: DataTypes.ENUM('order','return'),
			allowNull: false
		},
		ShipmentCreated: {
			type: DataTypes.DATE,
			allowNull: false
		},
		ShipmentUpdated: {
			type: DataTypes.DATE,
			allowNull: false
		},
		ShipmentTrackingURL: {
			type: DataTypes.STRING(2500),
			allowNull: false
		},
		ShipmentEstimatedDate: {
			type: DataTypes.DATEONLY,
			allowNull: false
		}
	}, {
		tableName: 'tb_shipment_lines'
	});
};
