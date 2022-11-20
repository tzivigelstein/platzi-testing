const request = require("supertest");
const createApp = require("../../app");
const generateFakeData = require("../../utils/generateFakeData");

const mockGetAll = jest.fn();
jest.mock("../../lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: () => mockGetAll(),
    create: () => {},
  }))
);

describe("Test for books endpoint", () => {
  let app;
  let server;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  test("test for [GET] api/v1/books", async () => {
    const testData = generateFakeData(3);
    mockGetAll.mockResolvedValue(testData);
    const response = await request(app).get("/api/v1/books");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body).toHaveLength(testData.length);
    expect(
      response.body.map((book) => ({
        ...book,
        releaseYear: new Date(book.releaseYear),
      }))
    ).toEqual(testData);
  });
});
