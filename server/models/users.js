import { DataTypes } from 'sequelize';
import { database } from '../bin/db/connect';

const User = database.define('User', {
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
}, {tableName: 'users'});

User.sync();
