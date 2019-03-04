/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curatorproduct', {
    CuratorProductID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    CuratorProductName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CuratorProductPrice: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    LabelProductID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'curatorproduct'
  });
};
