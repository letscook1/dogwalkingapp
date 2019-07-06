import React, { Component } from 'react';
import WalkListFilter from 'view/walk/list/WalkListFilter';
import WalkListTable from 'view/walk/list/WalkListTable';
import WalkListToolbar from 'view/walk/list/WalkListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class WalkListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.walk.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.walk.list.title')}
          </PageTitle>

          <WalkListToolbar />
          <WalkListFilter />
          <WalkListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default WalkListPage;
