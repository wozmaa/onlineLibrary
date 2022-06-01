const { Router } = require("express");

const { bookController } = require("../controllers/books.cotroller");

const router = Router();

router.post("/admin/books", bookController.postBook);
router.get("/admin/books", bookController.getBook);
router.delete("/admin/books/:id", bookController.deleteBookById);
router.patch("/admin/books/:id", bookController.patchBook);

module.exports = router;