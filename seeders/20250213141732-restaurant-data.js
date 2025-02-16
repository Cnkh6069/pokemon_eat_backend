"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */ await queryInterface.bulkInsert("restaurants", [
      {
        name: "SKAI",
        cuisine: "Contemporary",
        location: "South",
        address: "2 Stamford Road, Singapore 178882",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "LAVO Italian Restaurant & Rooftop Bar",
        cuisine: "Italian",
        location: "South",
        address:
          "10 Bayfront Avenue Marina Bay Sands Hotel Tower 1, Level 57, Sands Skypark, Singapore 018956",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Flint",
        cuisine: "Japanese",
        location: "Central",
        address: "Level 55, 2 Orchard Turn ION Orchard, Singapore 238801",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dusk@Mount Faber Peak",
        cuisine: "European",
        location: "South",
        address:
          "109 Mount Faber Road Level 2, Mount Faber Peak, Singapore 099203",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "JUMBO Seafood - East Coast",
        cuisine: "Chinese",
        location: "East",
        address:
          "Block 1206 East Coast Parkway #01-07/08, East Coast Seafood Centre, Singapore 449883",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "BAKALAKI Greek Taverna",
        cuisine: "Mediterranean",
        location: "Central",
        address: "38A Martin Road Martin No 38, Singapore 239072",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "RISE Restaurant",
        cuisine: "International",
        location: "South",
        address:
          "10 Bayfront Avenue, Marina Bay Sands Lobby, Hotel Tower 1, Singapore 018956 Singapore",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Merci Marcel Orchard",
        cuisine: "French",
        location: "Central",
        address:
          "390 Orchard Road 01-03 to 04 Palais Renaissance, Singapore 238871",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sansara",
        cuisine: "Indian",
        location: "South",
        address: "392 Havelock Road, Singapore 169663",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "My Awesome Cafe",
        cuisine: "French",
        location: "Central",
        address: "202 Telok Ayer Street, Singapore 068639",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mott 32",
        cuisine: "Chinese",
        location: "South",
        address:
          "2 Bayfront Avenue B1-42-44, Galleria Level, The Shoppes at Marina Bay Sands, Singapore 018958",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */ await queryInterface.bulkDelete("restaurants", null, {});
  },
};
