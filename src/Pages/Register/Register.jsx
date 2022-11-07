import { Button, Form, Input, Radio, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAapi } from "../../redux/productReducer/userReducer";
const { Option } = Select;
/**
 * Cach copy :
 * phan 1:import
 * phan 2:Noi dung ben ngoai compunent
 * phan 3:Noi dung ben trong compunent
 */
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 20,
    },
    sm: {
      span: 18,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 18,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 0,
    },
  },
};
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [formValid, setFormValid] = useState(true);
  const [form] = Form.useForm();

  const [checkNick, setCheckNick] = useState(false);
  useEffect(() => {
    form.validateFields(["nickname"]);
  }, [ form]);
  // const onCheckboxChange = (e) => {
  //   setCheckNick(e.target.checked);
  // };
  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log("Success:", values);
      const action = registerAapi(values);
      dispatch(action);
      navigate("/login");
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <div className="container">
      <Form
        form={form}
        name="dynamic_rule"
        onValuesChange={() => {
          setFormValid(
            form.getFieldsError().some((item) => item.errors.length > 0)
          );
        }}
      >
        <h3>Register</h3>
        <hr />
        <div className="row">
          <div className="col-6">
            <Form.Item
              {...formItemLayout}
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please Input Email",
                },
                {
                  // required: true,
                  message: "Email khong hop le",
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                },
              ]}
            >
              <Input placeholder="Please Input your Email" />
            </Form.Item>{" "}
            <Form.Item
              {...formItemLayout}
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Please input your password!" />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item
              {...formItemLayout}
              name="name"
              label="Name"
              rules={[
                {
                  required: checkNick,
                  message: "Please input your name",
                },
              ]}
            >
              <Input placeholder="Please input your name" />
            </Form.Item>{" "}
            <Form.Item
              {...formItemLayout}
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item name="gender" label="Gender">
              <Radio.Group>
                <Radio value={true}>Male</Radio>
                <Radio value={false}>Female</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item {...tailFormItemLayout} shouldUpdate className="submit">
              <Button
                type="danger"
                onClick={onCheck}
                htmlType="submit"
                disabled={formValid}
              >
                Register
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}
