const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Produit = sequelize.define('produit', {
    id_prod: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code_prod: Sequelize.STRING,

});

module.exports = Produit;
