import React from 'react';
import { Link } from 'dva/router';
import { Menu, Icon, Button } from 'antd';
import styles from './Ppsider.css';

const SubMenu = Menu.SubMenu;

const windowHeight = document.documentElement.clientHeight;

const menuHeight = windowHeight-62;

function Ppsider() {
  return (
    <div className={styles.main}>
      	<Menu
      		className={styles.menu}
      		mode="vertical"
      		theme="dark"
      		style={{ height: menuHeight}}
    	>
      		<Menu.Item key="/search" className={styles.search}>
      		  <Link to="/portfolio/search">SEARCH</Link>
      		</Menu.Item>
      		<Menu.Item key="/draft" className={styles.draft}>
      		  <Link to="/draft">DRAFT BOX<span className={styles.draftnum}>12</span></Link>
      		</Menu.Item>

      		<div className={styles.one}>Baselines</div>

      		<Menu.Item key="/create" className={styles.create}>
      		  <Link to="/create">+ Create Baseline</Link>
      		</Menu.Item>
            <Menu.Item key="setting:1">FY 16/17 NB</Menu.Item>
            <Menu.Item key="setting:2">FY 16/17 DT</Menu.Item>
            <Menu.Item key="setting:3">FY 15/16 NB</Menu.Item>
            <Menu.Item key="setting:4">FY 15/16 DT</Menu.Item>

            <div className={styles.one}>Master Data</div>
            <Menu.Item key="setting:5">MATRIX</Menu.Item>
    	</Menu>
    </div>
  );
}

export default Ppsider;
