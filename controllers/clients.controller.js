const Client = require("../models/Client.model");
const Book = require("../models/Book.model");
const Review = require("../models/Review.model");

module.exports.clientController = {
  //ДОБАВЛЯЕТ КЛИЕНТА
  postClient: async (req, res) => {
    try {
      const postC = await Client.create({
        name: req.body.name,
        rentBook: req.body.rentBook,
        isBlocked: req.body.isBlocked,
      });
      res.json(postC);
    } catch (e) {
      res.json(e);
    }
  },
  //ПОКАЗЫВАЕТ КЛИЕНТА
  getClient: async (req, res) => {
    try {
      const getC = await Client.find({}).populate("rentBook");
      res.json(getC);
    } catch (e) {
      res.json(e);
    }
  },
  //ПОКАЗЫВАЕТ ОПРЕДЕЛЕННОГО КЛИЕНТА
  getClientById: async (req, res) => {
    try {
      const getClientId = await Client.findById(req.params.id);
      res.json(getClientId);
    } catch (e) {
      res.json(e);
    }
  },
  //УДАЛЯЕТ КЛИЕНТА
  deleteClientById: async (req, res) => {
    try {
      await Client.findByIdAndRemove(req.params.id);
      res.json("клиент удален");
    } catch (e) {
      res.json(e);
    }
  },
  //ИЗМЕНЯЕТ КЛИЕНТА
  patchClient: async (req, res) => {
    try {
      const patchC = await Client.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        rentBook: req.body.rentBook,
        isBlocked: req.body.isBlocked,
      });
      res.json(patchC);
    } catch (e) {
      res.json(e);
    }
  },
  //БРАТЬ КНИГУ В АРЕНДУ
  pathArendBooks: async (req, res) => {
    try {
      const clientRent = await Client.findById(req.params.id);
      const book = await Book.findById(req.body.bookId);

      if (clientRent.isBlocked === false) {
        if (clientRent.rentBook.length < 3) {
          if (book.client === null) {
            await Client.findByIdAndUpdate(
              req.params.id,
              {
                $push: {
                  rentBook: req.body.bookId,
                },
              },
              { new: true }
            );

            await Book.findByIdAndUpdate(req.body.bookId, {
              client: req.params.id,
            });

            res.json("Книга успешно арендована");
          } else {
            res.json("эта книга уже арендована другим пользователем");
          }
        } else {
          res.json("нельзя арендовать больше 3-х книг одновременно");
        }
      } else {
        res.json("вы заблокированы");
      }
    } catch (e) {
      res.json(e);
    }
  },
  //ВОЗВРАТ КНИГИ
  pathReturnBook: async (req, res) => {
    try {
      await Client.findByIdAndUpdate(
        req.params.id,
        {
          $pull: {
            rentBook: req.book.bookId,
          },
        },
        { new: true }
      );

      await Book.findByIdAndUpdate(req.body.bookId, {
        client: null,
      });
    } catch (e) {
      res.json(e);
    }
  },
  //БЛОКИРОВКА ПОЛЬЗОВАТЕЛЯ АДМИНОМ
  blockClient: async (req, res) => {
    try {
      const bookk = await Book.findOne({ client: req.params.id });
      await Book.findByIdAndUpdate(bookk._id, {
        isBlocked: true,
        rentBook: [],
      });
    } catch (e) {
      res.json(e);
    }
  },
};
