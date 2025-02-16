// PokemonController
const { Pokemon, sequelize } = require("../models");

// Get all Pokemon
const getAllPokemon = async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Pokemons" });
  }
};

//Paginated Pokemon list
const getPaginatedPokemons = async (req, res) => {
  try {
    // Extract page number from query params (default to page 1 if not provided)
    const page = parseInt(req.query.page, 20) || 1;
    const limit = 20;
    const offset = (page - 1) * limit;

    // Fetch Pokemon using Sequelize's findAndCountAll for pagination
    const { count, rows } = await Pokemon.findAndCountAll({
      limit,
      offset,
    });

    // Calculate total pages
    const totalPages = Math.ceil(count / limit);

    // Return paginated data
    res.status(200).json({
      data: rows,
      meta: {
        currentPage: page,
        totalPages,
        totalItems: count,
      },
    });
  } catch (error) {
    console.error("Error fetching paginated Pokemon:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
//Create a new Pokemon entry
const createNewPokemon = async (req, res) => {
  try {
    const { name, rarity, imgsrc } = req.body;
    const newPokemon = await Pokemon.create({ name, rarity, imgsrc });
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(500).json({ error: "Failed to create new Pokemon" });
  }
};
//delete Pokemon from database
const deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pokemon.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Pokemon not found" });
    }
  } catch (error) {
    res.status(500).json({ errors: "Failure to delete Pokemon" });
  }
};

module.exports = {
  getAllPokemon,
  getPaginatedPokemons,
  createNewPokemon,
  deletePokemon,
};
