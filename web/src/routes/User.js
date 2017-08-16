import React from 'react';
import { connect } from 'dva';
import styles from './User.css';
import Header from '../components/Header';

function User() {
  return (
    <div className={styles.normal}>
      <Header />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(User);
