const { DataTypes } = require('sequelize');
const { database } = require('../bin/db/connect');

/**
 * Database model to store cart items.
 */
const CartItem = database.define('cart_item', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    count: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 1
    }
});

exports.CartItem = CartItem;
