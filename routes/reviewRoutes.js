const ReviewController = require("../controllers/reviewController.js");
const express = require("express");
const router = express.Router();

router.get("/", ReviewController.getAllReviews);
router.get("/restaurant/:restaurantId/reviews", ReviewController.getPaginatedReviews);
router.post("/restaurant/:restaurantId",ReviewController.createRestaurantReview)
router.post("/", ReviewController.createReview);
router.delete("/:id", ReviewController.deleteReview);
router.put("/:id", ReviewController.updateReview);
router.get("/user/:auth0Id", ReviewController.getReviewsByAuth0Id)

module.exports = router;