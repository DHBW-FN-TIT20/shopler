const {
    DataTypes
} = require('sequelize');
const {
    database
} = require('../bin/db/connect');

const User = database.define('user', {
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    indexes: [{
        unique: true,
        fields: ['username']
    }]
});

User.sync({
    force: true
});

exports.User = User;
