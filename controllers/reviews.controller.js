const Review = require("../models/Book.model");

module.exports.reviewController = {

  postReview: async (req, res) => {
    try {
      const postRew = await Review.create({
        text: req.body.text,
        name: req.body.name,
        book: req.body.book,
      });
      res.json(postRew);
    } catch (e) {
      res.json(e);
    }
  },
};
