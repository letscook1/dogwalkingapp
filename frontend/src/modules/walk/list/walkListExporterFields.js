import model from 'modules/walk/walkModel';

const { fields } = model;

export default [
  fields.id,
  fields.owner,
  fields.pet,
  fields.date,
  fields.location,
  fields.clientNotes,
  fields.walkerNotes,
  fields.status,
  fields.fee,
  fields.receipt,
  fields.createdAt,
  fields.updatedAt
];
