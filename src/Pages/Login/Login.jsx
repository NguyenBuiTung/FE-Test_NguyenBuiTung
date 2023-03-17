import { useDispatch } from "react-redux";
import { loginApi } from "../../redux/productReducer/userReducer";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { persistor } from "../../redux/configStore";
// import { set } from "immer/dist/internal";
const key = "updatable";
const openMessage = () => {
 
  
};
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    // console.log("Received values of form: ", values);
    try {
      const action = loginApi(values);
      await dispatch(action,setTimeout(()=>{
       persistor.purge()
      //  window.location.href = "/login";
      },1000000));
        message.success({
          content:"Đăng Nhập Thành Công",
          key,
          duration: 2,
        });
      navigate("/home");
      
    } catch (err) {
      message.error("Sai Tên Tài Khoản Hoặc Mật Khẩu");
    }
  };
  return (
    <div className="container login">
      <h3>Đăng Nhập</h3>
      <hr />
      <Form
        name="normal_login"
        className="login-form login-body"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
       
      >
        <Form.Item 
          name="email"
          rules={[
            {
              // type:'email',
              required: true,
              message: "Please input your Email",
            },
            {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Invalid email",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Lưu</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={openMessage}
          >
           Đăng Nhập
          </Button>
          Or{" "}
          <NavLink className="login-res" to="/register">
            Đăng kí ngay
          </NavLink>
        </Form.Item>
        {/* <LoginFacebook /> */}
      </Form>
    </div>
  );
}
