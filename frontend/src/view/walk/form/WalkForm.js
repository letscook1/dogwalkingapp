import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/walk/form/walkFormActions';
import selectors from 'modules/walk/form/walkFormSelectors';
import model from 'modules/walk/walkModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import TextAreaFormItem from 'view/shared/form/items/TextAreaFormItem';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'view/iam/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'view/shared/form/items/FilesFormItem';
import PetAutocompleteFormItem from 'view/pet/autocomplete/PetAutocompleteFormItem';

const { fields } = model;

class WalkForm extends Component {
  schema = new FormSchema(fields.id, [
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
  ]);

  componentDidMount() {
    const { dispatch, match } = this.props;

    if (this.isEditing()) {
      dispatch(actions.doFind(match.params.id));
    } else {
      dispatch(actions.doNew());
    }
  }

  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    const { id, ...data } = this.schema.cast(values);

    if (this.isEditing()) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  initialValues = () => {
    const record = this.props.record;

    if (this.isEditing() && record) {
      return this.schema.initialValues(record);
    }

    return this.schema.initialValues();
  };

  renderForm() {
    const { saveLoading } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                {this.isEditing() && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <UserAutocompleteFormItem
                  name={fields.owner.name}
                  label={fields.owner.label}
                  required={fields.owner.required}
                />
                <PetAutocompleteFormItem
                  name={fields.pet.name}
                  label={fields.pet.label}
                  required={fields.pet.required}
                />
                <DatePickerFormItem
                  name={fields.date.name}
                  label={fields.date.label}
                  required={fields.date.required}
                  showTime
                />
                <DatePickerFormItem
                  name={fields.location.name}
                  label={fields.location.label}
                  required={fields.location.required}
                  showTime
                />
                <TextAreaFormItem
                  name={fields.clientNotes.name}
                  label={fields.clientNotes.label}
                  required={fields.clientNotes.required}
                />
                <TextAreaFormItem
                  name={fields.walkerNotes.name}
                  label={fields.walkerNotes.label}
                  required={fields.walkerNotes.required}
                />
                <ImagesFormItem
                  name={fields.photos.name}
                  label={fields.photos.label}
                  required={fields.photos.required}
                  path={fields.photos.path}
                  schema={{
                    size: fields.photos.size,
                  }}
                  max={fields.photos.max}
                />
                <SelectFormItem
                  name={fields.status.name}
                  label={fields.status.label}
                  options={fields.status.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  required={fields.status.required}
                />
                <InputFormItem
                  name={fields.fee.name}
                  label={fields.fee.label}
                  required={fields.fee.required}
                />
                <FilesFormItem
                  name={fields.receipt.name}
                  label={fields.receipt.label}
                  required={fields.receipt.required}
                  path={fields.receipt.path}
                  schema={{
                    size: fields.receipt.size,
                    formats: fields.receipt.formats,
                  }}
                  max={fields.receipt.max}
                />

                <Form.Item
                  className="form-buttons"
                  {...tailFormItemLayout}
                >
                  <Button
                    loading={saveLoading}
                    type="primary"
                    htmlType="submit"
                    icon="save"
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    icon="undo"
                  >
                    {i18n('common.reset')}
                  </Button>
                </Form.Item>
              </Form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (this.isEditing() && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

function select(state) {
  return {
    findLoading: selectors.selectFindLoading(state),
    saveLoading: selectors.selectSaveLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(WalkForm);
