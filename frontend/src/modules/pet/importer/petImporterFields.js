import model from 'modules/pet/petModel';

const { fields } = model;

export default [
  fields.owner,
  fields.name,
  fields.gender,
  fields.breed,
  fields.size,
  fields.walks,
];
