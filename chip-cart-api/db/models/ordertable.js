'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderTable.init({
    orderDate: DataTypes.DATE,
    userid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrderTable',
  });
  return OrderTable;
};