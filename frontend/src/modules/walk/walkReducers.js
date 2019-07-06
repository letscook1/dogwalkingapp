import list from 'modules/walk/list/walkListReducers';
import form from 'modules/walk/form/walkFormReducers';
import view from 'modules/walk/view/walkViewReducers';
import destroy from 'modules/walk/destroy/walkDestroyReducers';
import importerReducer from 'modules/walk/importer/walkImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
