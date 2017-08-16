import React from 'react';
import { connect } from 'dva';
import styles from './Part.css';
import Header from '../components/Header';

function Part() {
  return (
    <div className={styles.normal}>
      <Header />
      Route Component: Part
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Part);
