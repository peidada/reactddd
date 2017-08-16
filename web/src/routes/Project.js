import React from 'react';
import { connect } from 'dva';
import styles from './Project.css';
import Header from '../components/Header';

function Project() {
  return (
    <div className={styles.normal}>
      <Header />
      Route Component: Project
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Project);
