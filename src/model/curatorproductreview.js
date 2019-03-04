/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curatorproductreview', {
    ReviewID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    Rating: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CuratorProductID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'curatorproduct',
        key: 'curatorproductid'
      }
    },
    UserID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'UserID'
      }
    },
    ReviewDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'curatorproductreview'
  });
};
