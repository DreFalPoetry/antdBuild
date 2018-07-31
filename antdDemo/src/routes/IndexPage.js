import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import LoginForm from '../components/LoginForm';

function IndexPage() {
  return (
    <div className={`${styles.normal} ${styles.loginFormWrapper}`}>
        <div className={styles.loginHeader}>
            <h2>标题</h2>
            <span>描述描述</span>
        </div>
        <LoginForm/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
