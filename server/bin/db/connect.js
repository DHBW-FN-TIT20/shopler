const { Sequelize } = require('sequelize');

exports.database = new Sequelize({
    host: 'man.cy',
    dialect: 'mariadb',
    database: 'shopster',
    username: 'shopster',
    password: 'fgICCsMrKmrQU4U1'
})
