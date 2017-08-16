import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const { SubMenu } = Menu;
const {Sider } = Layout;

const dataMenu = {
			  name:'Key Part Plan FY17',
			  sbbName: 'LCD',
			  sbbName2: 'CPU',
			  sbbName3: 'GFX',
			  achived: 'Archived Baselines',
			};
const heights = document.documentElement.clientHeight;
const siderheight = heights-62;		
function sbbList(){
	alert("sbb list!");
}
function SbbSider() {
	
	return(
       <Sider>  
	         <Menu
	          theme="dark"
	          mode="inline"
	          defaultSelectedKeys={['sub1']}
	          defaultOpenKeys={['sub1']}
	          style={{ height: siderheight}}
	        >
	          <SubMenu key="sub1" title={<Link to="/sbb" onClick={sbbList}>{dataMenu.name}</Link>}>
	            <Menu.Item key="1">{dataMenu.sbbName}</Menu.Item>
	            <Menu.Item key="2">{dataMenu.sbbName2}</Menu.Item>
	            <Menu.Item key="3">{dataMenu.sbbName3}</Menu.Item>
	            <Menu.Item key="4">{dataMenu.achived}</Menu.Item>
	          </SubMenu>
	        </Menu>
        </Sider>
	)
}
export default SbbSider;