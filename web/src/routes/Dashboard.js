import React from 'react';
import { connect } from 'dva';
import styles from './Dashboard.css';
import Header from '../components/Header';

function Dashboard() {
  return (
    <div className={styles.normal}>
      <Header />
      Route Component: Dashboard
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Dashboard);
