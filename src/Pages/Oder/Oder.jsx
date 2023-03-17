import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrderApi,
  getProductOrderApi,
} from "../../redux/productReducer/reducerProducts";
import { Table, Button } from "antd";
const columns = [
  {
    title: "Thời gian đặt hàng",
    dataIndex: "time",
    key: "time",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Mã đơn hàng",
    dataIndex: "id",
    key: "id",
    
  },
  {
    title: "Hủy đơn hàng",
    dataIndex: "delete",
    key: "delete",
    
  },
];

export default function Oder() {
  const { orders } = useSelector(
    (state) => state.persistedReducer.reducerProducts
  );
  const oder2 = orders.ordersHistory;
  // console.log(oder2);
  const data = oder2.map((item, index) => {
    return {
      key: index,
      time: item.date,
      id: item.id,
      delete: (
        <Button
          onClick={() => {
            deleteOrder(item.id);
          }}
        >
          <i className="fas fa-trash text-danger"></i>
        </Button>
      ),
    };
  });
  const subTotal = oder2.reduce((tt, sp) => {
    return (tt += sp.orderDetail[0].price * sp.orderDetail[0].quantity);
  }, 0);
  const subTotalMoney = subTotal + 20 - 200;
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getProductOrderApi();
    dispatch(action);
  }, []);
  const deleteOrder = (id) => {
    const orderId = {
      orderId: id,
    };
    const action = deleteOrderApi(orderId);
    dispatch(action);
  };
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row d-flex justify-content-center order">
          <div className="col-md-8">
            <div className="order">
              <div className="text-left logo p-2 px-5">
                {" "}
               <img src="https://i.imgur.com/2zDU056.png" width={50} alt="" />
              </div>
              <div className="invoice p-5">
                <h5>Đơn đặt hàng của bạn đã được xác nhận!!</h5>{" "}
                <span className="font-weight-bold d-block mt-4">
                  Xin chào,{orders.name}
                </span>{" "}
                <span>
                  Đơn đặt hàng của bạn đã được xác nhận và sẽ được giao trong
                  hai ngày tới!
                </span>
                <Table className="mt-4" columns={columns} dataSource={data} />;
                <div className="product border-bottom table-responsive">
                  <table className="table table-borderless">
                    <tbody>
                      {oder2.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td width="20%">
                              {" "}
                              <img
                                src={item.orderDetail[0].image}
                                alt=""
                                width={90}
                              />
                            </td>
                            <td width="60%">
                              {" "}
                              <span className="font-weight-bold">
                                {item.orderDetail[0].price}$
                              </span>
                              <div className="product-qty">
                                {" "}
                                <span className="d-block">
                                  Số lượng:{item.orderDetail[0].quantity}
                                </span>{" "}
                              </div>
                            </td>
                            <td width="20%">
                              <div className="text-right">
                                {" "}
                                <span className="font-weight-bold">
                                  {item.orderDetail[0].price *
                                    item.orderDetail[0].quantity}
                                  $
                                </span>{" "}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="row d-flex justify-content-end">
                  <div className="col-md-5">
                    <table className="table table-borderless">
                      <tbody className="totals">
                        <tr>
                          <td>
                            <div className="text-left">
                              {" "}
                              <span className="text-muted">Tổng Tiền</span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="text-right">
                              {" "}
                              <span>${subTotal}</span>{" "}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="text-left">
                              {" "}
                              <span className="text-muted">
                                Tiền Vận Chuyển
                              </span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="text-right">
                              {" "}
                              <span>$20</span>{" "}
                            </div>
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>
                            <div className="text-left">
                              {" "}
                              <span className="text-muted">Discount</span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="text-right">
                              {" "}
                              <span className="text-success">$200</span>{" "}
                            </div>
                          </td>
                        </tr>
                        <tr className="border-top border-bottom">
                          <td>
                            <div className="text-left">
                              {" "}
                              <span className="font-weight-bold">
                                Tổng Thanh Toán
                              </span>{" "}
                            </div>
                          </td>
                          <td>
                            <div className="text-right">
                              {" "}
                              <span className="font-weight-bold">
                                ${subTotalMoney}
                              </span>{" "}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p>
                  Chúng tôi sẽ gửi email xác nhận vận chuyển khi mặt hàng được
                  vận chuyển thành công!
                </p>
                <p className="font-weight-bold mb-0">
                  Cảm ơn đã mua sắm với chúng tôi!
                </p>{" "}
                <span>Bota Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
