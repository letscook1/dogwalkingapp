import model from 'modules/walk/walkModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import UserViewItem from 'view/iam/view/UserViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';
import FilesViewItem from 'view/shared/view/FilesViewItem';
import PetViewItem from 'view/pet/view/PetViewItem';

const { fields } = model;

class WalkView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <UserViewItem
          label={fields.owner.label}
          value={fields.owner.forView(record.owner)}
        />

        <PetViewItem
          label={fields.pet.label}
          value={fields.pet.forView(record.pet)}
        />

        <TextViewItem
          label={fields.date.label}
          value={fields.date.forView(record.date)}
        />

        <TextViewItem
          label={fields.location.label}
          value={fields.location.forView(record.location)}
        />

        <TextViewItem
          label={fields.clientNotes.label}
          value={fields.clientNotes.forView(record.clientNotes)}
        />

        <TextViewItem
          label={fields.walkerNotes.label}
          value={fields.walkerNotes.forView(record.walkerNotes)}
        />

        <ImagesViewItem
          label={fields.photos.label}
          value={fields.photos.forView(record.photos)}
        />

        <TextViewItem
          label={fields.status.label}
          value={fields.status.forView(record.status)}
        />

        <TextViewItem
          label={fields.fee.label}
          value={fields.fee.forView(record.fee)}
        />

        <FilesViewItem
          label={fields.receipt.label}
          value={fields.receipt.forView(record.receipt)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default WalkView;
