import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import DecimalRangeField from 'modules/shared/fields/decimalRangeField';
import DecimalField from 'modules/shared/fields/decimalField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import FilesField from 'modules/shared/fields/filesField';
import ImagesField from 'modules/shared/fields/imagesField';

function label(name) {
  return i18n(`entities.walk.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.walk.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  owner: new RelationToOneField('owner', label('owner'), {
    "required": true
  }),
  pet: new RelationToOneField('pet', label('pet'), {
    "required": true
  }),
  date: new DateTimeField('date', label('date'), {
    "required": true
  }),
  location: new DateTimeField('location', label('location'), {
    "required": true
  }),
  clientNotes: new StringField('clientNotes', label('clientNotes'), {
    "max": 20000
  }),
  walkerNotes: new StringField('walkerNotes', label('walkerNotes'), {
    "max": 20000
  }),
  photos: new ImagesField('photos', label('photos'), 'walk/photos',{
    "size": 3000000
  }),
  status: new EnumeratorField('status', label('status'), [
    { id: 'cancelled', label: enumeratorLabel('status', 'cancelled') },
    { id: 'completed', label: enumeratorLabel('status', 'completed') },
  ],{
    "required": true
  }),
  fee: new DecimalField('fee', label('fee'), {
    "scale": 2
  }),
  receipt: new FilesField('receipt', label('receipt'), 'walk/receipt',{
    "size": 3000000
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  dateRange: new DateTimeRangeField(
    'dateRange',
    label('dateRange'),
  ),
  locationRange: new DateTimeRangeField(
    'locationRange',
    label('locationRange'),
  ),
  feeRange: new DecimalRangeField(
    'feeRange',
    label('feeRange'),
  ),
};

export default {
  fields,
};
