const Sequelize = require('sequelize');

const sequelize = new Sequelize('tracabilite', 'ADM', 'ADM', {
    dialect: 'mssql',
    host: '192.168.121.1',
    port:'51166',
});

module.exports = sequelize;
