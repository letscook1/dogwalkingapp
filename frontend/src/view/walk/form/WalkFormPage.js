import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import WalkForm from 'view/walk/form/WalkForm';
import { i18n } from 'i18n';

class WalkFormPage extends Component {
  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  title = () => {
    return this.isEditing()
      ? i18n('entities.walk.edit.title')
      : i18n('entities.walk.new.title');
  };

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.walk.menu'), '/walk'],
            [this.title()],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{this.title()}</PageTitle>

          <WalkForm match={this.props.match} />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default WalkFormPage;
