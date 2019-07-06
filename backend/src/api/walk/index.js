module.exports = (app) => {
  app.post(`/walk`, require('./walkCreate'));
  app.put(`/walk/:id`, require('./walkUpdate'));
  app.post(`/walk/import`, require('./walkImport'));
  app.delete(`/walk`, require('./walkDestroy'));
  app.get(
    `/walk/autocomplete`,
    require('./walkAutocomplete'),
  );
  app.get(`/walk`, require('./walkList'));
  app.get(`/walk/:id`, require('./walkFind'));
};
