import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartAction,
  productCartApi,
} from "../../redux/productReducer/reducerProducts";
import { Button, Form, InputNumber, Radio, message, Pagination } from "antd";
// import { NavLink, useNavigate } from "react-router-dom";

export default function Profile() {
  const { productCart } = useSelector(
    (state) => state.persistedReducer.reducerProducts
  );
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    const action = productCartApi(current);
    dispatch(action);
  }, []);
  const onFinish = (values, cart) => {
    try {
      const action = cartAction({ values, ...cart });
      dispatch(action);
      message.success("Thêm sản phẩm thành công");
    } catch (err) {
      console.log(err);
      message.error("Thêm sản phẩm thất bại");
    }
  };
  // const [pagination,setPagination]=useState()

  const onChange = async (page) => {
    setCurrent(page);
    const action = productCartApi(page);
    await dispatch(action);
  };
  return (
    <div className="container">
      <div className=" product-card" id="top-card">
        {productCart.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="imgBx">
                <img
                  src={`https://shop.cyberlearn.vn/images/${item.image}`}
                  alt=""
                />
              </div>
              <Form
                onFinish={(values) => {
                  onFinish(values, item);
                }}
                //  onValuesChange={onChange}
                name="validate_other"
                // {...formItemLayout}
              >
                <div className="contentBx">
                  <h2>{item.name}</h2>
                  <h3>{item.price}$</h3>
                  <div className="size">
                    <h3>Size :</h3>
                    <Form.Item
                      name="size"
                      // label="Radio.Button"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng chọn size",
                        },
                      ]}
                    >
                      <Radio.Group buttonStyle="solid">
                        <Radio.Button value="36">36</Radio.Button>
                        <Radio.Button value="37">37</Radio.Button>
                        <Radio.Button value="38">38</Radio.Button>
                        <Radio.Button value="39">39</Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                  <div className="quantity">
                    <h3>Số Lượng :</h3>

                    <Form.Item name="quantity" initialValue={1}>
                      <InputNumber min={1} max={1000} />
                    </Form.Item>
                  </div>
                  <Button type="primary" htmlType="submit" className="me-2">
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </Form>
            </div>
          );
        })}
      </div>
      <Pagination
        current={current}
        total={30}
        onChange={onChange}
        responsive={true}
      />
    </div>
  );
}
