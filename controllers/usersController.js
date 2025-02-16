// UsersController
const { User, sequelize, UserPokemon } = require("../models");

// search for user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to find User" });
  }
};

// Get all reviews by a specific user
const getUserReviews = async (req, res) => {
  try {
    const { userId } = req.params;
    const reviews = await Review.findAll({
      where: { userId },
      include: [{ model: Restaurant }],
      order: [['createdAt', 'DESC']]
    });
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching user reviews:", error);
    res.status(500).json({ error: "Failed to fetch user reviews" });
  }
};

//update a User profile with a transaction
const updateUserById = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { id } = req.params;
    const { userName, firstName, lastName, email } = req.body;
    const [update] = await User.updated(
      { userName, firstName, lastName, email },
      { where: { id }, transaction }
    );
    if (updated) {
      const updatedUser = await User.findByPk(id, { transaction });
      await transaction.commit();
      res.status(200).json(updatedUser);
    } else {
      await transaction.rollback();
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    await transaction.rollback();
    res
      .status(500)
      .json({ error: "Failed to update User", details: error.message });
  }
};

// Get user's pokemon collection
const getUserPokemons = async (req, res) => {
  try {
    const { userId } = req.params;
    const pokemons = await UserPokemon.findAll({
      where: { userId },
      include: [{ model: Pokemon }]
    });
    res.status(200).json(pokemons);
  } catch (error) {
    console.error("Error fetching user pokemons:", error);
    res.status(500).json({ error: "Failed to fetch user pokemons" });
  }
};
// Delete a pokemon from user's collection
const deleteUserPokemon = async (req, res) => {
  try {
    const { userId, pokemonId } = req.params;
    
    const deleted = await UserPokemon.destroy({
      where: {
        userId,
        pokemonId
      }
    });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Pokemon not found in user's collection" });
    }
  } catch (error) {
    console.error("Error deleting pokemon from collection:", error);
    res.status(500).json({ error: "Failed to delete pokemon from collection" });
  }
};
module.exports = { getUserById, updateUserById, getUserReviews,getUserPokemons,deleteUserPokemon };
