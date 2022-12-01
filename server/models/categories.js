const { DataTypes } = require('sequelize');
const { database } = require('../src/db/connect');

/**
 * Database model to store categories.
 */
const Category = database.define('category', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {tableName: 'categories'});

exports.Category = Category;
