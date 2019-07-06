import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import WalkView from 'view/walk/view/WalkView';
import { i18n } from 'i18n';
import actions from 'modules/walk/view/walkViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/walk/view/walkViewSelectors';
import WalkViewToolbar from 'view/walk/view/WalkViewToolbar';

class WalkPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.walk.menu'), '/walk'],
            [i18n('entities.walk.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.walk.view.title')}
          </PageTitle>

          <WalkViewToolbar match={this.props.match} />

          <WalkView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(WalkPage);
