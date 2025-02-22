const RestaurantController = require("../controllers/restaurantController.js");
const ReviewController = require("../controllers/reviewController.js");
const express = require("express");
const router = express.Router();

router.get("/", RestaurantController.getAllRestaurant);
router.get("/:restaurantId", RestaurantController.getPaginatedRestaurant);
router.post("/", RestaurantController.createNewRestaurant);
router.put("/:id", RestaurantController.updateRestaurant);
router.delete("/:id", RestaurantController.deleteRestaurant);
router.get("/:id/reviews", RestaurantController.getRestaurantReviews);
router.get("/:id/stats", RestaurantController.getRestaurantStats)
router.get('/filter', RestaurantController.getFilteredRestaurants);
router.get("/:id", RestaurantController.getRestaurantById)
router.post("/:id/reviews", ReviewController.createRestaurantReview)

module.exports = router;