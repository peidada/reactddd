import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Table,Card,Row ,Col,Layout,Icon } from 'antd';
import Tables from './overview';
import Loadsheet from './loadsheet';
import PreviousVersions from './downloadVersion';
import Messages from './messageBoards';
import Header from '../../../components/Header';
import SbbSider from '../../../components/Layout/SbbSider';
import classnames from 'classnames';
import styles from './index.css';
const {Content } = Layout;

const SbbMain = (data) => {
	 return (
 <Layout>
     <Header />
      <Layout className={classnames('ant-layout-has-sider')}>
        <SbbSider />  
        <Content style={{ background: '#ECECEC', padding: 24, margin: 0}}>
         <Row gutter={24}>
				      <Col span={12}>
				        <Card title={
				        	<div>
				        	<div className={styles.iconview}></div>
				        	<div className={styles.title}>OverView</div>
				        	</div>
				        }
				        bordered={false}>
				        <Tables />
				        </Card>
				          <br/>
				        <Card title={
				        	<div>
				        	<div className={styles.icondown}></div>
				        	<div className={styles.title}>Download Previous Versions</div>
				        	</div>
				          }
				          bordered={false}>
				          <PreviousVersions />
				        </Card>
				      </Col>
				      <Col span={12}>
				       	 <Card title={
				        	<div>
				        	<div className={styles.icondboard}></div>
				        	<div className={styles.title}>Message Board</div>
				        	</div>
				          	}
				          	bordered={false}>
				       	  <Messages />
				        </Card>
				       <br/>
				        <Card title={
				        	<div>
				        	<div className={styles.iconload}></div>
				        	<div className={styles.title}>Loadsheet</div>
				        	</div>
				          	}
				          bordered={false}>
				          <Loadsheet />
				        </Card>
				      <br/>
				        <Card>
				        	<div>
				        	<div className={styles.iconarchive}></div>
				        	<div className={styles.title}>Archive Key Part Plan FY 17</div>
				        	<Icon type="inbox" className={styles.archiveButton} style={{cursor: 'pointer'}} />
				        	</div>
				        </Card>
				      </Col>
				    </Row>
        </Content>
      </Layout>
    </Layout>
  );
}


export default connect(({ data }) => ({
  data,
}))(SbbMain);
