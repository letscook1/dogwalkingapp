const genericFixture = require('./genericFixture');
const WalkRepository = require('../database/repositories/walkRepository');

const walkFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new WalkRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = walkFixture;
