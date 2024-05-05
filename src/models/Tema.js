const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
// En Mayúsculas y singular      // en minúsculas y singular
const Tema = sequelize.define("tema", {
  // Definimos las columnas aquí
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  artist: {
    type: DataTypes.STRING(100),
    // allowNull por defecto esta en true
  },
  genre: {
    type: DataTypes.STRING(100),
    // allowNull por defecto esta en true
  },
  release_year: {
    type: DataTypes.INTEGER,
    // allowNull por defecto esta en true
  },
});

module.exports = Tema;
