/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_coupons', {
		CouponID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CouponEligiableCats: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		CuratorID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'tb_curator',
				key: 'curatorid'
			}
		},
		CouponStart: {
			type: DataTypes.DATE,
			allowNull: false
		},
		CouponEnd: {
			type: DataTypes.DATE,
			allowNull: false
		},
		CouponMinOrder: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		CouponMaxDiscount: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		DiscountType: {
			type: DataTypes.ENUM('flat','percent'),
			allowNull: false
		},
		DiscountValue: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		LabelID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'tb_coupons'
	});
};
