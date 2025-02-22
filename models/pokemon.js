"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, {
        through: "UserPokemons",
        foreignKey: "pokemonId",
        targetKey: "id"
      });
    }
  }
  Pokemon.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      rarity: DataTypes.STRING,
      imgsrc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pokemon",
    }
  );
  return Pokemon;
};
