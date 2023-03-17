import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAction,
  oderSuccessApi,
  softCartAction,
  softCartActionHigh,
} from "../../redux/productReducer/reducerProducts";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const dispatch = useDispatch();
  const { carts } = useSelector(
    (state) => state.persistedReducer.reducerProducts
  );
  const { userLogin } = useSelector(
    (state) => state.persistedReducer.userReducer
  );
  const items = carts.length;
  const totolMoney = carts.reduce((total, sp, index) => {
    return (total = total + sp.values.quantity * sp.price);
  }, 0);
  //   console.log(totolMoney);
  const deleteItem = (item) => {
    const action = deleteAction(item);
    dispatch(action);
  };
  const softCartLow = (item) => {
    const action = softCartAction(item);
    dispatch(action);
  };
  const softCartHigh = (item) => {
    const action = softCartActionHigh(item);
    dispatch(action);
  };
  const navigate = useNavigate();
  const orderSuccess = (cart) => {
    cart.forEach((item) => {
      const order = {
        orderDetail: [
          {
            productId: item.id,
            quantity: item.values.quantity,
          },
        ],
        email: userLogin.email,
      };
      // console.log(order);
      const action = oderSuccessApi(order);
      dispatch(action);
      navigate("/order");
    });
  };
  return (
    <div className="cart-product">
      <div className="container mt-5 p-3 rounded cart">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="product-details mr-2">
              <div className="d-flex flex-row align-items-center">
                <i className="fa fa-long-arrow-left" />
                <span className="ml-2">Tiếp tục mua hàng</span>
              </div>
              <hr />
              <h6 className="mb-0 fw-bold fs-3 text-success">Giỏ hàng</h6>
              <div className="d-flex justify-content-between">
                <span className="fst-italic">
                  Bạn có {items} sản phẩm trong giỏ hàng
                </span>
                <div className="d-flex flex-row align-items-center">
                  <span className="text-black-50 fw-bolder fs-6">Sắp xếp:</span>
                  <div className="price ml-2 d-flex flex-column">
                    <Button
                      type="primary"
                      className="btn-low"
                      onClick={() => {
                        softCartLow(carts);
                      }}
                    >
                      Thấp Đến Cao
                    </Button>
                    <Button
                      type="primary"
                      className="btn-high"
                      onClick={() => {
                        softCartHigh(carts);
                      }}
                    >
                      Cao Đến Thấp
                    </Button>
                  </div>
                </div>
              </div>
              {carts.map((item, index) => {
                return (
                  <div
                    className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded"
                    key={index}
                  >
                    <div className="d-flex flex-row w-50">
                      <img
                        className="rounded img-cart"
                        src={`https://shop.cyberlearn.vn/images/${item.image}`}
                        width={40}
                        alt=""
                      />

                      <div className="ml-2">
                        <span className="font-weight-bold d-block fs-5 name-cart">
                          {item.name}
                        </span>
                        <span className="spec">{item.shortDescription}</span>
                      </div>
                    </div>
                    <div className="d-flex flex-row w-25 justify-content-center">
                      <div className="ml-2">
                        <span className="font-weight-bold d-block">Size</span>
                        <span className="spec text-black fw-bolder fs-6">
                          {item.values.size}
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center w-25 justify-content-center">
                      <span className="d-block fs-6">
                        {item.values.quantity}*
                      </span>
                      <span className="d-block ml-5 font-weight-bold fs-6 fw-bolder text-primary">
                        {item.price}$
                      </span>
                      <i
                        className="delete-trash fas fa-trash-alt text-danger ms-2"
                        onClick={() => {
                          deleteItem(item);
                        }}
                      ></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-4">
            <div className="payment-info">
          
              <div className="d-flex justify-content-between information">
                <span>Subtotal:</span>
                <span>{totolMoney}$</span>
              </div>

              <button
                onClick={() => {
                  orderSuccess(carts);
                }}
                className="btn btn-primary btn-block d-flex justify-content-between mt-3"
                type="button"
              >
                <span className="me-2">{totolMoney}$</span>
                <span>
                  Thanh Toán
                  <i className="fa fa-long-arrow-right ml-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
