const BooksService = require('../../services/books.service');
const generateFakeData = require('../../utils/generateFakeData');

const fakeBooks = generateFakeData();

const mockGetAll = jest.fn();
const mockCreate = jest.fn();

jest.mock('../../lib/mongo.lib', () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: mockCreate,
  }))
);

describe('Test for BookService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('should have books with length 1', async () => {
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      expect(books).toHaveLength(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });

  describe('Test for createBook', () => {
    test('should create a new book and return the DB entry', async () => {
      const newBook = {
        name: 'Hunger Games',
        releaseYear: '2008-09-14 00:00:00',
      };

      mockCreate.mockResolvedValue(newBook);

      const book = await service.createBook(newBook);

      expect(book).toBeInstanceOf(Object);
      expect(book.name).toEqual('Hunger Games');
      expect(book.releaseYear).toEqual('2008-09-14 00:00:00');
    });
  });
});
