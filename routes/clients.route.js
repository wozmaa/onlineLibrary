const { Router } = require("express");

const { clientController } = require("../controllers/clients.controller");
const { bookController } = require("../controllers/books.cotroller");
const { reviewController } = require("../controllers/reviews.controller");

const router = Router();

router.get("/client/book", bookController.getBook);
router.get("/client/book/genre/:id", bookController.getBooksByGenre);
router.get("/clinet/book/:id", bookController.getBookById)
router.post("/client/review/book/:id", reviewController.postReview);
router.patch("/client/book/:id/arendBooks", clientController.pathArendBooks);
router.patch("/client/book/:id/returnBooks", clientController.pathReturnBook);
router.patch("/admin/book/:id/blocked", clientController.blockClient);

module.exports = router;