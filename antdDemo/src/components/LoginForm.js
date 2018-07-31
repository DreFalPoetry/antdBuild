import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {connect} from 'dva';
import styles from '../routes/IndexPage.less';
import {routerRedux} from 'dva/router';
const FormItem = Form.Item;

class LoginForm extends Component{
    userLoginSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                console.log(this.props);
                this.props.dispatch(
                    routerRedux.push('/products')
                )
            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.userLoginSubmit} className={styles.loginForm}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button size="large" type="primary" htmlType="submit" className={styles.loginFormButton}>
                        Log in
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

function mapStateToProps(state){
    return {};
}
const WrappedLoginForm = Form.create()(LoginForm);
export default connect(mapStateToProps)(WrappedLoginForm);
