const request = require('supertest');
const createApp = require('../../app');

describe('Hello world', () => {
  let app;
  let server;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET /', () => {
    test("should return 'Hello World!'", async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Hello World!');
    });
  });
});
