/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_transactions', {
		TransactionID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		TransactionNumber: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		TransactionToken: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		TransactionCreated: {
			type: DataTypes.DATE,
			allowNull: false
		},
		StatusCode: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		TransactionStatus: {
			type: DataTypes.ENUM('pending','paid','failed'),
			allowNull: false
		},
		GatewayID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		GatewayTransactionID: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		TransactionType: {
			type: DataTypes.ENUM('request','capture','sale','void','refund'),
			allowNull: false
		},
		TransactionMessage: {
			type: DataTypes.STRING(2500),
			allowNull: false
		},
		OrderLineIDs: {
			type: DataTypes.STRING(5000),
			allowNull: false
		},
		TransactionDetails: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		TransactionParent: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ErrorCode: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		ErrorInfo: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		TransactionUpdated: {
			type: DataTypes.DATE,
			allowNull: false
		},
		StatusInfo: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'tb_transactions'
	});
};
