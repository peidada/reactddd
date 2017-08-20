import React from 'react';
import { Menu, Icon } from 'antd';

import { Link } from 'dva/router';
import styles from './Header.css';

const SubMenu = Menu.SubMenu;

function Header () {
  return (
    <div className={styles.main}>
    	<Menu
      		className={styles.menu}
      		mode="horizontal"
      		theme="dark"
    	>
      		<Menu.Item key="/portfolio" className={styles.portfolio}>
      		  <Link to="/portfolio/search">Product Portfolio</Link>
      		</Menu.Item>
      		<Menu.Item key="/sbb" className={styles.part}>
      		  <Link to="/sbb">Key Part Plan</Link>
      		</Menu.Item>
      		<Menu.Item key="/project" className={styles.project}>
      		  <Link to="/project">Project</Link>
      		</Menu.Item>
      		<Menu.Item key="/dashboard" className={styles.dashboard}>
      		  <Link to="/dashboard">Dashboard</Link>
      		</Menu.Item>
          <SubMenu title={<span><Icon type="mail" className={styles.task} / ><span className={styles.tasknum}>12</span></span>}>
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu title={<span className={styles.user}><Icon type="user"/ ><span className={styles.username}>Jay.Liu</span></span>}>
            <Menu.Item key="Delegation">Delegation</Menu.Item>
            <Menu.Item key="Settings">Settings</Menu.Item>
            <Menu.Item key="LoginOut"><Link to="/">Log Out</Link></Menu.Item>
          </SubMenu>
    	</Menu>
    </div>
  );
}

export default Header;
