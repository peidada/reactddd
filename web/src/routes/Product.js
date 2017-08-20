import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header';
import Ppsider from '../components/Ppsider';
import { Layout, Card, Table, Button, Icon } from 'antd';
import classnames from 'classnames';
import styles from './Product.css';

const { Content } = Layout;

function Product({location, dispatch, product}) {

  const { list } = product;

  console.log(list)

  const columns = [{
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'website',
      dataIndex: 'website',
      key: 'website',
    }, {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <img className={styles.down} />
      ),
    }];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Clementina DuBuque',    // Column configuration not to be checked
    }),
  };


  const downloadClick = () => {
    alert(111)
  }

  return (
    <div className={styles.normal}>
      <Layout>
      	<Header />
      	<Layout className={classnames('ant-layout-has-sider')}>
      		<Ppsider />
      		<Layout style={{ padding: '24px' }}>
        		<Content style={{ background: '#fff', minHeight: 280 }}>
              <div className={styles.topbox}>
                <div className={styles.leftbox}>
                  <div className={styles.topboxone}>Key criteria: Key criteria</div>
                  <div className={styles.topboxtwo}>20 Products:</div>
                </div>
                <Button type="primary" className={styles.download} onClick={downloadClick}>Download</Button>
              </div>
        		  <Table columns={columns} dataSource={list} rowSelection={rowSelection}/>
        		</Content>
      		</Layout>
      	</Layout>
      </Layout>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(({product}) => ({product}))(Product);
