import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import UserLayout from '../components/UserLayout';

function Layout() {
    return (
        <UserLayout/>
    );
}

function mapStateToProps(state){
    return {};
}
export default connect()(Layout);
