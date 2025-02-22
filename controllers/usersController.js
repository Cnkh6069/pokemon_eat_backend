// UsersController
const { User, sequelize, UserPokemon, Pokemon,Review, Restaurant } = require("../models");

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
    // First find the user by auth0Id
    const user = await User.findOne({
      where: { auth0Id: userId }
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Then find reviews using the user's database ID
    const reviews = await Review.findAll({
      where: { userId: user.id },
      include: [{ model: Restaurant , attributes: ['id','name']}],
      order: [['createdAt', 'DESC']]
    });
    console.log('Reviews found:', reviews); // Debug log
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching user reviews:", error);
    res.status(500).json({ error: "Failed to fetch user reviews" });
  }
};
// Search for User by Auth0 ID
const getUserByAuth0Id = async (req, res) => {
  try {
      const { auth0Id } = req.params;
      const user = await User.findOne({ 
          where: { auth0Id }
      });
      if (user) {
          res.status(200).json(user);
      } else {
          res.status(404).json({ error: "User not found" });
      }
  } catch (error) {
      console.error('Error finding user:', error);
      res.status(500).json({ error: 'Failed to find user' });
  }
};
//update a User profile with a transaction
const updateUserById = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { id } = req.params;
    const { userName, firstName, lastName, email, auth0Id } = req.body;
    const [update] = await User.update(
      { userName, firstName, lastName, email,auth0Id },
      { where: { id }, transaction }
    );
    if (update) {
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
const createUser = async (req, res) => {
  try {
    const { auth0Id, userName, firstName, lastName, email } = req.body;
    
    // Validate required fields
    if (!auth0Id || !userName || !email) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ 
      where: { auth0Id } 
    });

    if (existingUser) {
      return res.status(409).json({ 
        error: 'User already exists' 
      });
    }

    const newUser = await User.create({
      auth0Id,
      userName,
      firstName: firstName || null,
      lastName: lastName || null,
      email
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to create user' 
    });
  }
};

const assignPokemonToUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { pokemonId } = req.body;

    // Validate required fields
    if (!userId || !pokemonId) {
      return res.status(400).json({ error: 'User ID and Pokemon ID are required' });
    }

    // Check if user already has this pokemon
    const existingPokemon = await UserPokemon.findOne({
      where: {
        userId,
        pokemonId
      }
    });

    if (existingPokemon) {
      return res.status(409).json({ error: 'User already has this Pokemon' });
    }

    // Create new user-pokemon relationship
    const newUserPokemon = await UserPokemon.create({
      userId,
      pokemonId
    });

    res.status(201).json({
      message: 'Pokemon assigned successfully',
      data: newUserPokemon
    });

  } catch (error) {
    console.error('Error assigning Pokemon:', error);
    res.status(500).json({ error: 'Failed to assign Pokemon to user' });
  }
};
module.exports = { getUserById, updateUserById, getUserReviews,getUserPokemons,deleteUserPokemon,createUser, getUserByAuth0Id, assignPokemonToUser };
