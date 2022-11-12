const Sequelize = require('sequelize');

const sequelize = new Sequelize('expensetracker','root','123456789',{
    dialect: 'mysql',
    host:'localhost'
})

module.exports =sequelize;
