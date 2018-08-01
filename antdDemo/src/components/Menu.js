import React,{Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SideMenu extends Component{
    state={
        changeSubMenu:false,
        currentSubMenu:''
    }
    menuItemClick = ({ item, key, keyPath }) => {
        this.props.dispatch(
            routerRedux.push({pathname:`/${keyPath[1]}/${key}`})
        )
    }

    subMenuChange = (openKeys) => {
        this.setState({
            changeSubMenu:true,
            currentSubMenu:openKeys[1]
        })
    }

    render(){
        return (
            <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                <div className="logo" />
                <Menu
                    onOpenChange={this.subMenuChange}
                    onClick={this.menuItemClick}
                    theme='dark'
                    openKeys={[this.state.changeSubMenu?this.state.currentSubMenu:this.props.menuKey.openMenuItem]}
                    selectedKeys={[this.props.menuKey.currentSelectItem]}
                    mode="inline"
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                        <Menu.Item key="5">Option 1</Menu.Item>
                        <Menu.Item key="6">Option 2</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="7">Option 1</Menu.Item>
                        <Menu.Item key="8">Option 2</Menu.Item>
                        <Menu.Item key="9">Option 3</Menu.Item>
                        <Menu.Item key="10">Option 4</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}

function mapStateToProps(state){
    return {};
}
export default connect(mapStateToProps)(SideMenu);

