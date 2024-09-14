const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('virtual_classroom', 'postgres', '9529', {
    host: 'localhost',
    dialect: 'postgres',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
