// restaurantController
const { Restaurant, Review, User, sequelize } = require("../models");

// Get all Restaurants
const getAllRestaurant = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      include: [{
        model: Review,
        attributes: []
      }],
      attributes: {
        include: [
          [sequelize.fn('AVG', sequelize.col('Reviews.rating')), 'averageRating']
        ]
      },
      group: ['Restaurant.id']
    });
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Restaurant" });
  }
};
// Query details of a single restaurant by ID
const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findOne({
      where: { id },
      attributes: [
        'id',
        'name',
        'cuisine',
        'location',
        'address',
        'createdAt',
        'updatedAt',
        [sequelize.fn('AVG', sequelize.col('Reviews.rating')), 'averageRating']
      ],
      include: [{
        model: Review,
        attributes: []
      }],
     
      group: ['Restaurant.id', 'Restaurant.name', 'Restaurant.cuisine', 'Restaurant.location', 'Restaurant.address', 'Restaurant.createdAt', 'Restaurant.updatedAt']
    });

    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
 // Format the response
 const formattedRestaurant = {
  ...restaurant.toJSON(),
  averageRating: restaurant.getDataValue('averageRating') || 0
};
res.status(200).json(formattedRestaurant);
} catch (error) {
  console.error("Error fetching restaurant:", error);
  res.status(500).json({ error: "Failed to fetch restaurant" });
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
    const { id } = req.params;  // Changed from restaurantId to id to match route param
    const reviews = await Review.findAll({
      where: { restaurantId: id },
      include: [{ 
        model: User, 
        attributes: [ "userName",'email'] // Added userName
      },{model:Restaurant,
        attributes:['name']
      }],
      attributes:['id','userReview','rating','createdAt','userId'],
      order: [["createdAt", "DESC"]],
    });
    console.log('Restaurant reviews:', reviews); // Debug log
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
const getFilteredRestaurants = async (req, res) => {
  try {
    const { location, cuisine, minRating } = req.query;
    let whereClause = {};

    if (location) whereClause.location = location;
    if (cuisine) whereClause.cuisine = cuisine;
    
    const restaurants = await Restaurant.findAll({
      where: whereClause,
      include: [{
        model: Review,
        attributes: []
      }],
      attributes: {
        include: [
          [sequelize.fn('AVG', sequelize.col('Reviews.rating')), 'averageRating']
        ]
      },
      group: ['Restaurant.id'],
      having: minRating ? sequelize.literal(`AVG(Reviews.rating) >= ${minRating}`) : null
    });

    res.json(restaurants);
  } catch (error) {
    console.error('Error filtering restaurants:', error);
    res.status(500).json({ error: 'Failed to filter restaurants' });
  }
};

module.exports = {
  getRestaurantById,
  getAllRestaurant,
  getPaginatedRestaurant,
  createNewRestaurant,
  deleteRestaurant,
  updateRestaurant,
  getRestaurantStats,
  getRestaurantReviews,getFilteredRestaurants
};
