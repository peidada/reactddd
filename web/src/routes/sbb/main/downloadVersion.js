import React from 'react'
import { DatePicker,Button,Icon} from 'antd';

const PreviousVersions = () => {
	
	return (
		<div>
		Choose End Date:
   		<br/><br/>
   		 <DatePicker placeholder="Select date" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   		 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   		 <Button style={{width:'45px',height:'45px',borderRadius:'50%', backgroundColor: '#EAEAEA' }}><Icon type="download" style={{ fontSize: '18'}} /></Button>
		</div>
  );
  
  
}
export default PreviousVersions