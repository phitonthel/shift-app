'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Shift.init({
    name: DataTypes.STRING,
    dateShift: DataTypes.DATE,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    startTimestamp: DataTypes.INTEGER,
    endTimestamp: DataTypes.INTEGER,
    isPublished: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shift',
  });
  return Shift;
};