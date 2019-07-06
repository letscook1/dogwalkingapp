import model from 'modules/walk/walkModel';

const { fields } = model;

export default [
  fields.owner,
  fields.pet,
  fields.date,
  fields.location,
  fields.clientNotes,
  fields.walkerNotes,
  fields.photos,
  fields.status,
  fields.fee,
  fields.receipt,
];
