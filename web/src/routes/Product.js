import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header';
import Ppsider from '../components/Ppsider';
import { Layout, Card } from 'antd';
import classnames from 'classnames';
import styles from './Product.css';

const { Content } = Layout;

function Product() {
  return (
    <div className={styles.normal}>
      <Layout>
      	<Header />
      	<Layout className={classnames('ant-layout-has-sider')}>
      		<Ppsider />
      		<Layout style={{ padding: '24px' }}>
        		<Content style={{ background: '#fff', minHeight: 280 }}>
        		  product list
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

export default connect(mapStateToProps)(Product);
