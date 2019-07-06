import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/walk/importer/walkImporterSelectors';
import WalkService from 'modules/walk/walkService';
import fields from 'modules/walk/importer/walkImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'WALK_IMPORTER',
  selectors,
  WalkService.import,
  fields,
  i18n('entities.walk.importer.fileName'),
);
