const request = require('supertest');
const createApp = require('../../app');

describe('Books', () => {
  let app;
  let server;
  const testData = [
    {
      name: 'The Lord of the Rings',
      releaseYear: new Date('1954-07-29'),
    },
    {
      name: 'The Hobbit',
      releaseYear: new Date('1937-09-21'),
    },
    {
      name: 'The Silmarillion',
      releaseYear: new Date('1977-09-15'),
    },
  ];

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  beforeEach(async () => {
    await request(app).delete('/api/v1/books');
    const promises = testData.map((book) =>
      request(app).post('/api/v1/books').send(book)
    );
    await Promise.all(promises);
  });

  afterAll(async () => {
    await server.close();
  });

  test('should return a list of books', async () => {
    const response = await request(app).get('/api/v1/books');

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(
      response.body.map(({ _id, ...rest }) => ({
        ...rest,
        releaseYear: new Date(rest.releaseYear),
      }))
    ).toEqual(testData);
    expect(response.body).toHaveLength(testData.length);
  });

  test('should post a book and return it', async () => {
    const book = {
      name: 'The Fellowship of the Ring',
      releaseYear: new Date('1954-07-29'),
    };
    const response = await request(app).post('/api/v1/books').send(book);
    const body = response.body;
    const { _id, ...rest } = body;

    expect(response.status).toBe(201);
    expect(body).toBeDefined();
    expect({
      ...rest,
      releaseYear: new Date(rest.releaseYear),
    }).toEqual(book);
  });
});
