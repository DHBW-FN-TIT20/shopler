const { DataTypes } = require('sequelize');
const { database } = require('../src/db/connect');

/**
 * Database model to store items.
 */
const Item = database.define('item', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    }
});

exports.Item = Item;
