const ReviewController = require("../controllers/reviewController.js");
const express = require("express");
const router = express.Router();

router.get("/", ReviewController.getAllReviews);
router.get("/:restaurantId/reviews", ReviewController.getPaginatedReviews);
router.post("/", ReviewController.createReview);
router.delete("/:id", ReviewController.deleteReview);
router.put("/:id", ReviewController.updateReview)

module.exports = router;