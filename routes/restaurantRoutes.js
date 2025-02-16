const RestaurantController = require("../controllers/restaurantController.js");
const express = require("express");
const router = express.Router();

router.get("/", RestaurantController.getAllRestaurant);
router.get("/:restaurantId", RestaurantController.getPaginatedRestaurant);
router.post("/", RestaurantController.createNewRestaurant);
router.put("/:id", RestaurantController.updateRestaurant);
router.delete("/:id", RestaurantController.deleteRestaurant);
router.get("/:restaurantId/reviews", RestaurantController.getRestaurantReviews);
router.get("/:restaurantId/stats", RestaurantController.getRestaurantStats)

module.exports = router;