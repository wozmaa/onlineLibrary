const Genre = require("../models/Genre.model");

module.exports.genreController = {
    //ДОБАВЛЯЕТ ЖАНР
  postGenre: async (req, res) => {
    try {
      const postGenre = await Genre.create({ name: req.body.name });
      res.json(postGenre);
    } catch (e) {
      res.json(e);
    }
  },
  //ПОКАЗЫВАЕТ ВСЕ ЖАНРЫ
  getGenre: async (req, res) => {
    try {
      const findG = await Genre.find();
      res.json(findG);
    } catch (e) {
      res.json(e);
    }
  },
  //УДАЛЯЕТ ЖАНР
  deleteGenreById: async (req, res) => {
    try {
      await Genre.findByIdAndRemove(req.params.id);
      res.json("жанр удален");
    } catch (e) {
      res.json(e);
    }
  },
  //ИЗМЕНЯЕТ ЖАНР
  patchGenre: async (req, res) => {
    try {
      await Genre.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
    } catch (e) {
      res.json(e);
    }
  },
};
