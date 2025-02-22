'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserPokemon.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'auth0Id'
      });
      UserPokemon.belongsTo(models.Pokemon, {
        foreignKey: 'pokemonId'
      });
    }
  }
  UserPokemon.init({
    userId: {
      type: DataTypes.STRING, 
      allowNull: false,
      references: {
        model: 'Users',
        key: 'auth0Id'
      }
    },
    pokemonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Pokemons',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'UserPokemon',
  });
  return UserPokemon;
};