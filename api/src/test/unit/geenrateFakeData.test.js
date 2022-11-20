const generateFakeData = require("../../utils/generateFakeData");

describe("Test for generate fake data", () => {
  const fakeBooks = generateFakeData(1);
  test("should return an array of length 1", () => {
    expect(fakeBooks).toHaveLength(1);
  });

  test("should return an array of objects", () => {
    expect(fakeBooks[0]).toBeInstanceOf(Object);
  });

  test("should return an array of objects with name and releaseYear", () => {
    expect(fakeBooks[0]).toHaveProperty("name");
    expect(fakeBooks[0]).toHaveProperty("releaseYear");
  });
});
