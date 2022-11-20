const { faker } = require("@faker-js/faker");

function generateFakeData(amount = 10) {
  return Array(amount)
    .fill()
    .map(() => ({
      _id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      releaseYear: faker.date.birthdate(),
      price: faker.commerce.price(),
    }));
}

module.exports = generateFakeData;
