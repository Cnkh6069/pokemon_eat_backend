'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("UserPokemons", [
      {
        userId: "auth0|677293630af81649485b8f7d", 
        pokemonId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: "auth0|677293630af81649485b8f7d",
        pokemonId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("UserPokemons", null, {});
  },
};
