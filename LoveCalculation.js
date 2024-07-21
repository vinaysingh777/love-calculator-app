const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LoveCalculation = sequelize.define('LoveCalculation', {
  name1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lovePercentage: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = LoveCalculation;
