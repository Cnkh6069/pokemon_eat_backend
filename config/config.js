require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.PASSWORD,
    database: "pokemon_eats",
    host: "localhost",
    dialect: "mysql",
  },
};
