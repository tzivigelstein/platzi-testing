const express = require('express');
const BooksService = require('../services/books.service');

const router = express.Router();
const service = new BooksService();

router.get('/', async (req, res) => {
  const books = await service.getBooks();
  res.status(200).json(books);
});

router.post('/', async (req, res) => {
  const { body } = req;
  const newBook = await service.createBook(body);
  res.status(201).json(newBook);
});

router.delete('/', async (req, res) => {
  const books = await service.deleteAllBooks();
  res.status(204).json(books);
});

module.exports = router;
