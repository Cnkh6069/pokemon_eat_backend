// restaurantController
const { Restaurant, Review, User, sequelize } = require("../models");

// Get all Restaurants
const getAllRestaurant = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Restaurant" });
  }
};

//Paginated Restaurant list
const getPaginatedRestaurant = async (req, res) => {
  try {
    // Extract page number from query params (default to page 1 if not provided)
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    // Fetch Restaurant using Sequelize's findAndCountAll for pagination
    const { count, rows } = await Restaurant.findAndCountAll({
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
    console.error("Error fetching paginated Restaurant:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Create a new Restaurant entry
const createNewRestaurant = async (req, res) => {
  try {
    const { name, cuisine, location, address } = req.body;
    const newRestaurant = await Restaurant.create({
      name,
      cuisine,
      location,
      address,
    });
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ error: "Failed to create new Restaurant" });
  }
};

//Delete a Restaurant entry
const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    await Restaurant.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Restaurant" });
  }
};

//Update a Restaurant entry by ID
const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, cuisine, location, address } = req.body;

    const restaurant = await Restaurant.findByPk(id);

    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    await restaurant.update({ name, cuisine, location, address });

    res.status(200).json(restaurant);
  } catch (error) {
    console.error("Error updating restaurant:", error);
    res.status(500).json({ error: "Failed to update Restaurant" });
  }
};
// Get all reviews for a specific restaurant with user details
const getRestaurantReviews = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const reviews = await Review.findAll({
      where: { restaurantId },
      include: [{ model: User, attributes: ["id"] }],
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching restaurant reviews:", error);
    res.status(500).json({ error: "Failed to fetch restaurant reviews" });
  }
};

// Get restaurant statistics (average rating, total reviews)
const getRestaurantStats = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const stats = await Review.findAll({
      where: { restaurantId },
      attributes: [
        [sequelize.fn("AVG", sequelize.col("rating")), "averageRating"],
        [sequelize.fn("COUNT", sequelize.col("id")), "totalReviews"],
      ],
    });
    res.status(200).json(stats[0]);
  } catch (error) {
    console.error("Error fetching restaurant stats:", error);
    res.status(500).json({ error: "Failed to fetch restaurant statistics" });
  }
};

module.exports = {
  getAllRestaurant,
  getPaginatedRestaurant,
  createNewRestaurant,
  deleteRestaurant,
  updateRestaurant,
  getRestaurantStats,
  getRestaurantReviews,
};
