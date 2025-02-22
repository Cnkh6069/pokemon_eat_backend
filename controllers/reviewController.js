// ReviewController
const { Review, sequelize , Restaurant, User, Pokemon,UserPokemon} = require("../models");
const {Op} = require("sequelize");
// Get all Reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).json(re);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Reviews" });
  }
};

//Paginated Review list for a specific restaurant
const getPaginatedReviews = async (req, res) => {
  try {
    const { restaurantId } = req.params; // Get restaurant ID from URL parameters
    // Extract page number from query params (default to page 1 if not provided)
    const page = parseInt(req.query.page, 20) || 1;
    const limit = 20;
    const offset = (page - 1) * limit;

    // Fetch Reviews using Sequelize's findAndCountAll for pagination
    const { count, rows } = await Review.findAndCountAll({
      where: {
        restaurantId: restaurantId, // Filter by restaurant ID
      },include: [{model:User, attributes:['userName','auth0Id']}],
      limit,
      offset,
      order: [["createdAt", "DESC"]], // sort by newest first
    });

    // Calculate total pages
    const totalPages = Math.ceil(count / limit);

    // Return paginated data
    res.status(200).json({
      data: rows,
      meta: {
        currentPage: page,
        totalPages,
        totalItems: count, restaurantId
      },
    });
  } catch (error) {
    console.error("Error fetching paginated Reviews:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Create a new Review entry
const createReview = async (req, res) => {
  try {
    const { userId, userReview, restaurantId,rating } = req.body;
    //validate required fields
    if(!userId || !userReview || !restaurantId || !rating){
      return res.status(400).json({error: "Missing required fields"})
    }
    //Validate rating is between 1 and 5
    if(rating < 1 || rating > 5){
      return res.status(400).json({error: "Rating must be between 1 and 5"})
    }
   // Start a transaction
   const result = await sequelize.transaction(async (t) => {
    // Create for recent reviews by this user for this restaurant
    const recentReview = await Review.findOne({
      where: {
        userId: userId,
        restaurantId: restaurantId,
        createdAt: {
          [Op.gte]: new Date(new Date() - 24 * 60 * 60 * 1000) // last 24 hours
        }
      },
      transaction:t
    });

    if (recentReview) {
      throw new Error('You can only review a restaurant once every 24 hours');
    }
  
    // Create the review
    const newReview = await Review.create({
      userId,
      userReview,
      restaurantId, // Match your model's column name
      rating
    }, { transaction: t });
  
    // Get random Pokemon
    const randomPokemon = await Pokemon.findOne({
      order: sequelize.random(),
      transaction: t
    });
  
    // Add Pokemon to user's collection
    await UserPokemon.create({
      userId,
      pokemonId: randomPokemon.id
    }, { transaction: t });
  
    return { review: newReview, pokemon: randomPokemon };
  });

  res.status(201).json({
    message: "Review created successfully",
    review: result.review,
    rewardedPokemon: result.pokemon
  });
} catch (error) {
  console.error("Error creating new Review:", error);
  if (error.message === 'You can only review a restaurant once every 24 hours') {
    res.status(400).json({ error: error.message });
  } else {
    res.status(500).json({ error: "Failed to create new Review" });
  }
}
};
//delete Review from database
const deleteReview= async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Review.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ errors: "Failure to delete Review" });
  }
};
//Update a Review entry by ID
const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { userReview, rating } = req.body;

    // Validate rating if it's being updated
    if (rating && (rating < 1 || rating > 5)) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    const review = await Review.findByPk(id);
    
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    await review.update({ userReview, rating });
    
    res.status(200).json(review);
  } catch (error) {
    console.error("Error updating review:", error);
    res.status(500).json({ error: "Failed to update Review" });
  }
};

// create review for restaurant id
const createRestaurantReview = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const { rating, userReview, userId } = req.body;
   
    // Validate required fields
    if (!userReview || !rating || !userId) {
      return res.status(400).json({ error: "Rating, userReview and userId are required" });
    }

    // Validate rating
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    // Start transaction
    const result = await sequelize.transaction(async (t) => {
      // Check for recent reviews
      const recentReview = await Review.findOne({
        where: {
          userId,
          restaurantId,
          createdAt: {
            [Op.gte]: new Date(new Date() - 24 * 60 * 60 * 1000)
          }
        },
        transaction: t
      });

      if (recentReview) {
        throw new Error('You can only review a restaurant once every 24 hours');
      }

      // Create the review
      const newReview = await Review.create({
        userId,
        userReview: userReview,
        restaurantId: parseInt(restaurantId),
        rating
      }, { transaction: t });

      // Get random Pokemon
      const randomPokemon = await Pokemon.findOne({
        order: sequelize.random(),
        transaction: t
      });

      // Add Pokemon to user's collection
      await UserPokemon.create({
        userId,
        pokemonId: randomPokemon.id
      }, { transaction: t });

      return { review: newReview, pokemon: randomPokemon };
    });

    res.status(201).json({
      message: "Review created successfully",
      review: result.review,
      rewardedPokemon: result.pokemon
    });
  } catch (error) {
    console.error("Error creating review:", error);
    if (error.message === 'You can only review a restaurant once every 24 hours') {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Failed to create review" });
    }
  }
};
//Find all the reviews under one userID
const getReviewsByAuth0Id = async (req, res) => {
  try {
    const { auth0Id } = req.params;
    
    // Find user's reviews including restaurant details
    const reviews = await Review.findAll({
      include: [
        { 
          model: Restaurant,
          attributes: ['id', 'name']
        }
      ],
      where: {
        userId: auth0Id
      },
      order: [['createdAt', 'DESC']]
    });

    console.log('Found reviews:', reviews); // Debug log
    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching user reviews:', error);
    res.status(500).json({ error: 'Failed to fetch user reviews' });
  }
};

module.exports = {
  getAllReviews,
  getPaginatedReviews,
  createReview,
  deleteReview,
  updateReview, createRestaurantReview, getReviewsByAuth0Id
};