const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Exptracker = sequelize.define('expensetracker',{
  id:{
    type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
  },
  amount:Sequelize.STRING,
  description: Sequelize.STRING,
  category: Sequelize.STRING
});

module.exports = Exptracker;