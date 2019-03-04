/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('labelproducts', {
    LabelProductID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    LabelProductName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    LabelProductDesc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    LabelProductImg: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'labelproducts'
  });
};
