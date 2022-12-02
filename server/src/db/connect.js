const { Sequelize } = require('sequelize');

/**
 * Initialize the MariaDB database.
 */
const database = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mariadb',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

exports.database = database;
