const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Palette = sequelize.define('palette', {
    id_palette: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code_palette: Sequelize.STRING,
    poids : Sequelize.INTEGER,
    nombre: Sequelize.INTEGER
});

module.exports = Palette;
