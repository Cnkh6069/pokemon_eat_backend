const PokemonController = require("../controllers/pokemonController.js");
const express = require("express");
const router = express.Router();

router.get("/", PokemonController.getAllPokemon);
router.get("/page", PokemonController.getPaginatedPokemons);
router.post("/", PokemonController.createNewPokemon);
router.delete("/:id", PokemonController.deletePokemon);
router.get('/user/:userId', PokemonController.getUserPokemons);

module.exports = router;
