const { DataTypes } = require('sequelize');
const { database } = require('../bin/db/connect');

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
