const Book = require("../models/Book.model");

module.exports.bookController = {
    // ДОБАВЛЯЕТ КНИГУ
  postBook: async (req, res) => {
    try {
      const postB = await Book.create({
        name: req.body.name,
        genre: req.body.genre,
      });
      res.json(postB);
    } catch (e) {
      res.json(e);
    }
  },
  //ПОКАЗЫВАЕТ ВСЕ КНИГИ
  getBook: async (req, res) => {
    try {
      const findBook = await Book.find();
      res.json(findBook);
    } catch (e) {
      res.json(e);
    }
  },
  //ПОКАЗЫВАЕТ ОПРЕДЕЛЕННУЮ КНИГУ
  getBookById: async (req, res) => {
    try {
      const findBookById = await Book.findById(req.params.id)
        .populate("client")
        .populate("genre");
      res.json(findBookById);
    } catch (e) {
      res.json(e);
    }
  },
  //ПОКАЗЫВАЕТ КНИГУ ПО ЖАНРУ
  getBooksByGenre: async (req, res) => {
    try {
      const genreBook = await Book.find({ genre: req.params.id }).populate(
        "genre"
      );
      res.json(genreBook);
    } catch (e) {
      res.json(e);
    }
  },
  //УДАЛЯЕТ КНИГУ
  deleteBookById: async (req, res) => {
    try {
      await Book.findByIdAndRemove(req.params.id);
      res.json("книга удалена");
    } catch (e) {
      res.json(e);
    }
  },
  //ИЗМЕНЯЕТ КНИГУ
  patchBook: async (req, res) => {
    try {
      const patchB = await Book.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        genre: req.body.genre,
        client: req.body.client,
        rent: req.body.rent,
      });
      res.json(patchB);
    } catch (e) {
      res.json(e);
    }
  },
};
