const Sequelize = require('sequelize');

const connection = new Sequelize('nodejs_youcode', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = connection;