'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        auth0Id: "auth0|677293630af81649485b8f7d",
        userName: "testUser",
        email: "test@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};