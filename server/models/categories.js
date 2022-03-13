const { DataTypes } = require('sequelize');
const { database } = require('../bin/db/connect');

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


