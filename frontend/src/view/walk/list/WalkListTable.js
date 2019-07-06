import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/walk/list/walkListActions';
import destroyActions from 'modules/walk/destroy/walkDestroyActions';
import selectors from 'modules/walk/list/walkListSelectors';
import destroySelectors from 'modules/walk/destroy/walkDestroySelectors';
import model from 'modules/walk/walkModel';
import walkSelectors from 'modules/walk/walkSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import UserListItem from 'view/iam/list/users/UserListItem';
import FilesListView from 'view/shared/list/FileListView';
import PetListItem from 'view/pet/list/PetListItem';

const { fields } = model;

class WalkListTable extends Component {
  handleTableChange = (pagination, filters, sorter) => {
    const { dispatch } = this.props;

    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  doDestroy = (id) => {
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(id));
  };

  columns = [
    fields.id.forTable(),
    fields.owner.forTable({
      render: (value) => <UserListItem value={value} />,
    }),
    fields.pet.forTable({
      render: (value) => <PetListItem value={value} />,
    }),
    fields.date.forTable(),
    fields.location.forTable(),
    fields.status.forTable(),
    fields.fee.forTable(),
    fields.receipt.forTable({
      render: (value) => <FilesListView value={value} />,
    }),
    fields.createdAt.forTable(),
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/walk/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/walk/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {this.props.hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => this.doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  rowSelection = () => {
    return {
      selectedRowKeys: this.props.selectedKeys,
      onChange: (selectedRowKeys) => {
        const { dispatch } = this.props;
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  render() {
    const { pagination, rows, loading } = this.props;

    return (
      <TableWrapper>
        <Table
          rowKey="id"
          loading={loading}
          columns={this.columns}
          dataSource={rows}
          pagination={pagination}
          onChange={this.handleTableChange}
          rowSelection={this.rowSelection()}
          scroll={{ x: true }}
        />
      </TableWrapper>
    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state) ||
      destroySelectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasPermissionToEdit: walkSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: walkSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(WalkListTable);
