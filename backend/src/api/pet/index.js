module.exports = (app) => {
  app.post(`/pet`, require('./petCreate'));
  app.put(`/pet/:id`, require('./petUpdate'));
  app.post(`/pet/import`, require('./petImport'));
  app.delete(`/pet`, require('./petDestroy'));
  app.get(
    `/pet/autocomplete`,
    require('./petAutocomplete'),
  );
  app.get(`/pet`, require('./petList'));
  app.get(`/pet/:id`, require('./petFind'));
};
