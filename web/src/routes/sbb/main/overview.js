import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Table,Card,Row ,Col} from 'antd';
import styles from './index.css';


const Tables = (data) => {
	
	const columns = [{
		  title: 'SBB Name',
		  dataIndex: 'sbbName',
		  key: 'sbbName',
		}, {
		  title: 'Amount',
		  dataIndex: 'amount',
		  key: 'amount',
		}, {
		  title: 'Status',
		  dataIndex: 'status',
		  key: 'status',
	}];
	
	 data = [{
			  key: '1',
			  sbbName: 'LCD',
			  amount: 32,
			  status: 
			  		<div>
			  			<div style={{width:'12px',height:'12px',borderRadius:'50%', backgroundColor: '#2C9B34',float: 'left',marginTop:'3px'}}></div>
			  			&nbsp;&nbsp;&nbsp;
			  			<div style={{float: 'left',marginLeft:'10px'}}>Released</div>
			  		</div>
			}, {
			  key: '2',
			  sbbName: 'CPU',
			  amount: 42,
			  status: 
			  		<div>
			  			<div style={{width:'12px',height:'12px',borderRadius:'50%', backgroundColor: '#FA5F9B',float: 'left',marginTop:'3px'}}></div>
			  			&nbsp;&nbsp;&nbsp;
			  			<div style={{float: 'left',marginLeft:'10px'}}>Under Review</div>
			  		</div>
			},
			{
			  key: '3',
			  sbbName: 'GFX',
			  amount: 22,
			  status: 	
			  		<div>
			  			<div style={{width:'12px',height:'12px',borderRadius:'50%', backgroundColor: '#F7ED27',float: 'left',marginTop:'3px'}}></div>
			  			&nbsp;&nbsp;&nbsp;
			  			<div style={{float: 'left',marginLeft:'10px'}}>Initial</div>
			  		</div>
			}
			];
	
	 return (
		        <Table pagination={false} columns={columns} dataSource={data} />
  );
}

Tables.propTypes = {
  data: PropTypes.array.isRequired,
};


export default Tables