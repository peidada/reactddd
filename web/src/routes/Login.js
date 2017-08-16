import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button, Row, Form, Input, Icon } from 'antd';
import styles from './Login.css';

const FormItem = Form.Item

const Login = ({
  app,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  }
}) => {

  const {loginLoading} = app

  function handleOk () {
    validateFieldsAndScroll((err,value) => {
      if ( err || value.password!==value.username+"!") {
        alert("username and password error")
        return
      }else{       
        dispatch({type:'app/login',payload:value}),
        console.log(value)
      }
    })
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginView}>
        <div>
          <img className={styles.logo} />
        </div>
        <div className={styles.loginBody}>
          <form>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(<Input size="large" onPressEnter={handleOk} placeholder="Username" />)}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="Password" />)}
            </FormItem>

              <Button className={styles.loginButton} type="primary" size="large" onClick={handleOk} loading={loginLoading}>
                Login
              </Button>
          </form>
        </div>

      </div>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  app: PropTypes.object,
  dispatch: PropTypes.func,
}


export default connect(({ app }) => ({ app }))(Form.create()(Login))
