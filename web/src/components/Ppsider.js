import React from 'react';
import { Link } from 'dva/router';
import { Menu, Icon, Button } from 'antd';
import styles from './Ppsider.css';

const SubMenu = Menu.SubMenu;

const windowHeight = document.documentElement.clientHeight;

const menuHeight = windowHeight-62;

function Ppsider({draftnum, baselinelist}) {
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
      		  <Link to="/draft">DRAFT BOX<span className={styles.draftnum}>{draftnum.data}</span></Link>
      		</Menu.Item>

      		<div className={styles.one}>Baselines</div>

      		<Menu.Item key="/create" className={styles.create}>
      		  <Link to="/create">+ Create Baseline</Link>
      		</Menu.Item>
          { baselinelist.data.map((baseline,id) => <Menu.Item key={id}>{baseline.baselineName}</Menu.Item>) }
          <div className={styles.one}>Master Data</div>
          <Menu.Item key="setting:5">MATRIX</Menu.Item>
    	</Menu>
    </div>
  );
}

export default Ppsider;
