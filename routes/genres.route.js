const { Router } = require("express");

const { genreController } = require("../controllers/genres.controller");

const router = Router();

router.post("/admin/genre", genreController.postGenre);
router.get("/admin/genre", genreController.getGenre);
router.delete("/admin/genre/:id", genreController.deleteGenreById);
router.patch("/admin/genre/:id", genreController.patchGenre);

module.exports = router;