/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('label', {
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
    }
  }, {
    tableName: 'label'
  });
};
