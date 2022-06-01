const { Router } = require("express");

const { reviewController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/review", reviewController.postReview);

module.exports = router;