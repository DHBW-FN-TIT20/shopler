const { DataTypes } = require('sequelize');
const { database } = require('../bin/db/connect');

const List = database.define('list', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }
});

exports.List = List;