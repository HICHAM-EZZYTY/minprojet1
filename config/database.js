const Sequelize = require('sequelize');

const connection = new Sequelize('p3_nodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
});

module.exports = connection;