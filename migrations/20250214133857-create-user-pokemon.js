'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserPokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING,
        references: {
          model: 'Users',
          key: 'auth0Id'
        },
        onDelete: 'CASCADE'
      },
      pokemonId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pokemons',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserPokemons');
  }
};