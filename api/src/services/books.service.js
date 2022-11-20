const MongoLib = require("../lib/mongo.lib");

class BooksService {
  constructor() {
    this.collection = "books";
    this.mongoDB = new MongoLib();
  }

  getBooks(query) {
    return this.mongoDB.getAll(this.collection, query);
  }

  createBook(newBook) {
    return this.mongoDB.create(this.collection, newBook);
  }

  deleteAllBooks() {
    return this.mongoDB.deleteAll(this.collection);
  }
}

module.exports = BooksService;
