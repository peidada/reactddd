import React from 'react'
import { Steps,Button,Upload, Icon,Checkbox,Row,Col,message  } from 'antd';
const Step = Steps.Step;


function checkbox()
		{
			var checkValue = document.getElementsByName("check")
			var objarray=checkValue.length;
			var chestr = "";
			for (var i=0;i<objarray;i++){
				 if(checkValue[i].checked == true){
				  chestr+=checkValue[i].value+",";
				 }
			}
			if(chestr == ""){
			 return false
			}else{
				return true
			}
		}

class Loadsheet extends React.Component {
	// initialize data
	constructor(props) {
    super(props);
    this.state = {
      current: 0,
      fileList: [],
    };
  }
	 //check checkbox, next step
	checks(){
			var check = checkbox();
			if(check == true){
				const current = 1;
				this.setState({ current });
			}
		}
	 //download Excel, next step
	 downloadExcel(){
	var check = checkbox();
	if(check == false){
		alert("");
		message.error('Select key part!');
		 const current = 0;
    	this.setState({ current });
	}else{
			message.success('download successfully.');
		   	const current = 2;
    		this.setState({ current });
	}
}
	 //upload function
	handleUpload = () => {
	    const { fileList } = this.state;
	    const formData = new FormData();
	    fileList.forEach((file) => {
	      formData.append('files[]', file);
    });
  
  }
		
		
	 render() {
		const { current } = this.state;
		//upload function
		const props = {
			      action: '/sbb/upload/',
			      onRemove: (file) => {
			        this.setState(({ fileList }) => {
			          const index = fileList.indexOf(file);
			          const newFileList = fileList.slice();
			          newFileList.splice(index, 1);
			          return {
			            fileList: newFileList,
			          };
			        });
			      },
			      beforeUpload: (file) => {
			        this.setState(({ fileList }) => ({
			          fileList: [...fileList, file],
			        }));
			        return false;
			      },
			      fileList: this.state.fileList,
    };
		return (
		<div>
		       <Steps direction="vertical" current={current}>
		  				  <Step title="Select key parts you want to upload." description={
					    	<div> 
							     <Checkbox.Group onChange={() => this.checks()}>
								    <Row>
								      <Col span={8}><Checkbox value="LCD" name="check" disabled={this.state.current > 1} >LCD</Checkbox></Col>
								      <Col span={8}><Checkbox value="CPU" name="check" disabled={this.state.current > 1}>CPU</Checkbox></Col>
								      <Col span={8}><Checkbox value="GFX" name="check" disabled={this.state.current > 1}>GFX</Checkbox></Col>
								    </Row>
  								</Checkbox.Group>
  					</div>
					    }/>
		  				  <Step title=" Click the icon to download master file." description={
							    <Button onClick={() => this.downloadExcel()} disabled={this.state.current < 1}>
							      <Icon type="download" /> Click to download
							    </Button>
						  } />
					    <Step title="Upload the NEW master file" description={
					    	<Upload  {...props}>
							    <Button disabled={this.state.current < 2}>
							      <Icon type="upload" /> Click to upload
							    </Button>
							  </Upload>
						  } />
					     <Step title=" Submit." description={
					     <div><Button disabled={this.state.fileList.length === 0}>Cancel</Button> 
					     &nbsp;  &nbsp;&nbsp; 
					     <Button
				          type="primary"
				          onClick={this.handleUpload}
				          disabled={this.state.fileList.length === 0}
					     >Submit</Button></div>
					     }/>
			  </Steps>
		</div>
   );
  }
}
export default Loadsheet