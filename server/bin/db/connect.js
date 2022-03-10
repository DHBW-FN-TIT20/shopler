const {
    Sequelize
} = require('sequelize');

const database = new Sequelize({
    host: 'man.cy',
    dialect: 'mariadb',
    database: 'shopster',
    username: 'shopster',
    password: 'fgICCsMrKmrQU4U1'
})

exports.database = database;
