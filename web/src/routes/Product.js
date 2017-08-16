import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header';
import Ppsider from '../components/Ppsider';
import { Layout, Card, Table } from 'antd';
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
    },
  ];




  return (
    <div className={styles.normal}>
      <Layout>
      	<Header />
      	<Layout className={classnames('ant-layout-has-sider')}>
      		<Ppsider />
      		<Layout style={{ padding: '24px' }}>
        		<Content style={{ background: '#fff', minHeight: 280 }}>
        		  <Table columns={columns} dataSource={[list]} />
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
