import React from 'react';
import { Input,Icon } from 'antd';
const { TextArea } = Input;
function Messages (){
				return (
						 <div>
				        	 <div>	 Message 111111 </div>
				        	<br />
				        	<div style={{borderBottom:'1px solid #ccc'}}></div>
				        	<br />
				        	 <TextArea rows={3} />
				        	 <br /><br />
				        	 <Icon type="check-circle-o" style={{float:'right',fontSize: 30, color: 'rgba(86, 203, 255, 1)',cursor: 'pointer'}}/>
				       	 </div>
  );
  
  
}
export default Messages