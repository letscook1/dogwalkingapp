const userFixture = require('./userFixture');
const walkFixture = require('./walkFixture');
const petFixture = require('./petFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  walk: walkFixture,
  pet: petFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
