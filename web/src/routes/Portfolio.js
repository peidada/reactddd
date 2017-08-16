import React from 'react';
import { connect } from 'dva';
import styles from './Portfolio.css';
import Header from '../components/Header';
import Ppsider from '../components/Ppsider';

function Portfolio() {
  return (
    <div className={styles.normal}>
      <Header />
      <Ppsider />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Portfolio);
