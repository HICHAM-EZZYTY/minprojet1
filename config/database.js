const Sequelize = require('sequelize');

const connection = new Sequelize('p3_nodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;