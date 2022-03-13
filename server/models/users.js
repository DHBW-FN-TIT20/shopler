const { DataTypes } = require('sequelize');
const { database } = require('../bin/db/connect');

const User = database.define('user', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refreshToken: {
        type: DataTypes.JSON,
        defaultValue: "[]",
        set(val) {
            const newToken = JSON.stringify(val);
            this.setDataValue('refreshToken', newToken);
        }
    }
}, {
    indexes: [{
        unique: true,
        fields: ['username']
    }]
});

exports.User = User;
