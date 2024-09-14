const { DataTypes } = require('sequelize');
const db = require('./index');

const Class = db.sequelize.define('Class', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    instructorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Class;
