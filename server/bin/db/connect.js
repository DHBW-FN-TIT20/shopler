const { Sequelize } = require('sequelize');

/**
 * Initialize the MariaDB database.
 */
const database = new Sequelize({
    dialect: 'sqlite',
    storage: './bin/db/db.sqlite'
})

exports.database = database;
