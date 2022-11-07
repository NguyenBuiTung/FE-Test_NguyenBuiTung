// import React from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginApi } from "../../redux/productReducer/userReducer";
import LoginFacebook from "../../Components/LoginFacebook/LoginFacebook";
// export default function Login() {
//   const dispatch = useDispatch();
//   const frm = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: yup.object().shape({
//       email: yup.string().email("Email không đúng định dạng !"),
//       // password:
//     }),
//     onSubmit: (values) => {
//       console.log(values);
//       const action = loginApi(values);
//       dispatch(action);
//     },
//   });

//   return (
//     <div className="login container ">
//       <h3>Login</h3>
//       <hr />
//       <form className="mt-2 login-body" onSubmit={frm.handleSubmit}>
//         <div className="form-group">
//           <p>Email</p>
//           <input
//             className="form-control"
//             id="email"
//             name="email"
//             onChange={frm.handleChange}
//             onBlur={frm.handleBlur} placeholder='Email'
//           />
//           {frm.errors.email ? (
//             <p className="text text-danger">{frm.errors.email}</p>
//           ) : (
//             ""
//           )}
//         </div>
//         <div className="form-group">
//           <p>Password</p>
//           <input
//             className="form-control"
//             id="password"
//             name="password"
//             type={"password"}
//             onChange={frm.handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <button className="btn btn-success" type="submit">
//             Login
//           </button>
//         </div>
//         <LoginFacebook />
//       </form>
//     </div>
//   );
// }

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const action = loginApi(values);
    await dispatch(action);
    navigate("/profile");
  };
  return (
    <div className="container login">
      <h3>Login</h3>
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
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or{" "}
          <NavLink className="login-res" to="/register">
            Register now!
          </NavLink>
        </Form.Item>
        <LoginFacebook />
      </Form>
    </div>
  );
}
