import React , { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import request from 'superagent';
import history from 'history';


const FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    var user = this.props.form.getFieldsValue();
    request.post('/weixin/login')
      .type('form')
      .send(user)
      .end(function(err, data) {
        window.location.href = '/weixin/index';
      });

    this.props.login(user)
    console.log('收到表单值：', this.props.form.getFieldsValue());
  }

  render() {
    const {getFieldProps} = this.props.form;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormItem
      label="账户：">
          <Input placeholder="请输入账户名"
      {...getFieldProps('username')} />
        </FormItem>
        <FormItem
      label="密码：">
          <Input type="password" placeholder="请输入密码"
      {...getFieldProps('password')} />
        </FormItem>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form>
      );
  }
}

export default LoginForm = Form.create()(LoginForm);
