import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileApi } from "../../redux/productReducer/userReducer";
import { Button, Form, Input, Radio } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
export default function Profile() {
  const { userProfile } = useSelector((state) => state.userReducer);
  // console.log(userProfile)
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log(values);
  };
  useEffect(() => {
    //Gọi api get profile
    const actionAsync = getProfileApi();
    dispatch(actionAsync);
    //
  }, []);
  // console.log(userProfile.gender);
  const [value, setValue] = useState(!!userProfile.gender);
  // console.log(userProfile.gender);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue();
  };

  return (
    <div className=" profile">
      <h3>Profile</h3>
      <div className="row container">
        <div className="col-4">
          <img src={userProfile.avatar} alt="..." />
        </div>
        <div className="col-8">
          <Form
            className="d-flex"
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <div className="col-6">
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                  {
                    // required: true,
                  },
                ]}
              >
                <Input placeholder={userProfile.email} />
              </Form.Item>
              <Form.Item
                name={["user", "phone"]}
                label="Phone"
                rules={[
                  {
                    type: "phone",
                  },
                ]}
              >
                <Input placeholder={userProfile.phone} />
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[
                  {
                    type: "name",
                  },
                ]}
              >
                <Input placeholder={userProfile.name} />
              </Form.Item>
              <Form.Item
                name={["user", "password"]}
                label="Password"
                rules={[
                  {
                    type: "password",
                  },
                ]}
              >
                <Input placeholder={userProfile.password} />
              </Form.Item>

              <Form.Item label="Gender">
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={true}> Male </Radio>
                  <Radio value={false}> Female </Radio>
                </Radio.Group>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </Form.Item>

              {/* <Form.Item
                  wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 8,
                  }}
                >
                
                </Form.Item> */}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
