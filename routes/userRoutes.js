const usersController = require("../controllers/usersController.js");

const express = require("express");

const router = express.Router();

router.get("/:id", usersController.getUserById);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUserById);
router.get("/:id/reviews", usersController.getUserReviews);
router.get("/:id/pokemons", usersController.getUserPokemons);
router.delete("/id/pokemons/:pokemonId", usersController.deleteUserPokemon);
router.get('/auth/:auth0Id', usersController.getUserByAuth0Id)


module.exports = router;
