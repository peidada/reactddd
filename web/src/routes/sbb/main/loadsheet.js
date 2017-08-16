import React from 'react'
import { Steps,Button,Upload, Icon,Checkbox} from 'antd';
const Step = Steps.Step;


const Loadsheet = () => {
	 return (
		<div>
		       <Steps direction="vertical" current={1}>
		  				  <Step title="Select key parts you want to upload." description={
					    	<div> <Checkbox />LCD   <Checkbox />CPU   <Checkbox /> GFX </div>
					    }/>
		  				  <Step title=" Click the icon to download master file." description={
							    <Button href="http://www.baidu.com">
							      <Icon type="download" /> Click to download
							    </Button>
						  } />
					    <Step title="Upload the NEW master file" description={<Upload>
							    <Button>
							      <Icon type="upload" /> Click to upload
							    </Button>
							  </Upload>
						  } />
					     <Step title=" Submit." description={
					     <div><Button>Cancel</Button> 
					     &nbsp;  &nbsp;&nbsp; 
					     <Button type="primary">Submit</Button></div>
					     }/>
			  </Steps>
		</div>
  );
}
export default Loadsheet