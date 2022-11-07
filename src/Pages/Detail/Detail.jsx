import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductCart,
  getProductDetailApi,
} from "../../redux/productReducer/productReducer";
import { useParams, NavLink } from "react-router-dom";
import { Button, Radio, Form, InputNumber } from "antd";
import { useRef } from "react";
// import { useRef } from "react";
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
// const normFile = (e) => {
//   console.log("Upload event:", e);
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };
export default function Detail() {
  const { productDetail, productCart } = useSelector(
    (state) => state.productReducer
  );
  // console.log(productCart)
  const productRef = useRef({
    quantitynew: "",
    total: "",
  });
  const [price, setPrice] = useState(productDetail.price);
  const [formValid, setFormValid] = useState(true);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const action = getProductDetailApi(id);
    dispatch(action);
  }, [id]);

  const onChange = (value) => {
    setPrice(productDetail.price * value);
    productRef.current.quantitynew = value;
    // console.log(productRef.current);
  };
  const setPr = () => {
    setPrice(productDetail.price);
  };

  const onFinish = (values) => {
    let newCart = { ...productRef.current,values};
    // console.log(newCart);
    const action = getProductCart(newCart);
    dispatch(action);
  };
  return (
    <div className="container">
      <div className="row detail">
        <div className="col-4 mt-2">
          <img src={productDetail.image} alt="..." className="w-100" />
        </div>
        <div className="col-8 mt-2">
          <Form
            form={form}
            onFinish={() => onFinish(productDetail)}
            onValuesChange={() => {
              setFormValid(
                form.getFieldsError().some((item) => item.errors.length > 0)
              );
            }}
            name="validate_other"
            {...formItemLayout}
            initialValues={{
              "input-number": 3,
              "checkbox-group": ["A", "B"],
              rate: 3.5,
            }}
          >
            <h3 className="detail-name">{productDetail.name}</h3>
            <p>{productDetail.description}</p>
            <h4>Available size </h4>
            <Form.Item
              name="sizechon"
              rules={[
                {
                  required: true,
                  message: "Please pick an size!",
                },
              ]}
            >
              <Radio.Group buttonStyle="solid">
                <Radio.Button value="36">36</Radio.Button>
                <Radio.Button value="37">37</Radio.Button>
                <Radio.Button value="38">38</Radio.Button>
                <Radio.Button value="39">39</Radio.Button>
                <Radio.Button value="40">40</Radio.Button>
                <Radio.Button value="41">41</Radio.Button>
                <Radio.Button value="42">42</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <h5>{price}$</h5>
            <Form.Item
              wrapperCol={{
                span: 18,
                offset: 0,
              }}
            >
              <InputNumber
                min={1}
                max={100}
                defaultValue={1}
                className="d-block"
                onChange={onChange}
              />

              <Button
                type="primary"
                disabled={formValid}
                htmlType="submit"
                className="add-to-cart"
                // onClick={() => {
                //   pushCart(productDetail);
                // }}
              >
                Add to cart
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <h3 className="mt-2 related-product">Related Products</h3>
      <div className="row mt-2 product-row">
        {productDetail.relatedProducts?.map((prod, index) => {
          return (
            <div className="col-4 product-col" key={index}>
              <div className="card product-card">
                <img src={prod.image} alt="..." />
                <i className="fas fa-heart    "></i>
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p>
                    {prod.description.length > 75
                      ? prod.description.substr(0, 75) + "..."
                      : prod.description}
                  </p>
                  <div className="d-flex align-items-center card-end">
                    <NavLink
                      onClick={setPr}
                      to={`/detail/${prod.id}`}
                      className="btn btn-outline-success"
                    >
                      View Detail
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
