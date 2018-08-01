import React,{Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import {connect} from 'dva';
import SideMenu from './Menu';
const { Header, Content, Footer, Sider } = Layout;

class UserLayout extends Component{

    render(){
        return (
            <Layout>
                <SideMenu menuKey={this.props.menuKey}/>
                <Layout style={{ marginLeft: 200,  overflow: 'auto', height: '100vh'}}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial',background:'white',padding:'20px' }}>
                        {this.props.mainContent}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

function mapStateToProps(state){
    return {};
}
export default connect(mapStateToProps)(UserLayout);

