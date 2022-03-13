const {
    DataTypes
} = require('sequelize');
const {
    database
} = require('../bin/db/connect');
const {
    User
} = require('./users');


new ShoppingList = database.define('shopping_list', {
    shopping_list_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
});

ShoppingList.hasOne(User);