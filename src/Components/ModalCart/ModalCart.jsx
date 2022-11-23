import { Button, Modal, Divider, Radio, Table, Image, InputNumber } from "antd";
import React, { useState } from "react";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import {
  deleteCarts,
  getSubmitCartApi,
  handleChange,
} from "../../redux/productReducer/productReducer";
import { settings, USER_LOGIN } from "../../util/config";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
   
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Img",
    dataIndex: "img",
   
  },
  {
    title: "Name",
    dataIndex: "name",
   
  },
  {
    title: "Size",
    dataIndex: "size",
    
  },
  {
    title: "Price",
    dataIndex: "price",
   
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    
  },
  {
    title: "Total",
    dataIndex: "total",
    
  },
  {
    title: "Action",
    dataIndex: "action",
   
  },
];
// console.log(productDetail)

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
export default function ModalCart() {
  const navigate=useNavigate()
  const { productCart } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const onChange = (value, item) => {
    // console.log("changed", value, item);
    const action = handleChange({ value, item });
    dispatch(action);
  };
  const delCart = (item) => {
    // console.log(t)
    const action = deleteCarts(item);
    dispatch(action);
  };
  const [selectionType, setSelectionType] = useState("checkbox");
  const [open, setOpen] = useState(false);
  const data = productCart.map((item, index) => {
    return {
      id: item.carts.id,
      name: item.carts.name,
      img: <Image style={{width:50}} src={item.carts.image} />,
      price: item.carts.price + "$",
      size: item.newSize,
      quantity: (
        <InputNumber style={{width:50}}
          min={1}
          max={100}
          defaultValue={item.quantitynew}
          value={item.quantitynew}
          onChange={(value) => {
            onChange(value, item);
          }}
        />
      ),
      total: item.quantitynew * item.carts.price + "$",
      action: (
        <Button
          type="danger"
          onClick={() => {
            delCart(item);
          }}
        >
          Delete
        </Button>
      ),
    };
  });
  const Contine = (item) => {
    // console.log("first");
    const action = getSubmitCartApi(item);
    dispatch(action);
  };
  let toTal = productCart.reduce((tsl, sp, index) => {
    return (tsl += sp.quantitynew);
  }, 0);
  let toTalMoney = productCart.reduce((tt, sp, index) => {
    return (tt += sp.quantitynew * sp.carts.price);
  }, 0);
  return (
    <>
      <Button
        type=""
        style={{
          background: "#212529",
          color: "white",
          border: "none",
          fontSize: "16px",
        }}
        onClick={() => {
          if(settings.getStorageJson(USER_LOGIN)) {
           setOpen(true)
        }else{
          navigate('/login')
        }
        }}
      >
        <i className="fas fa-cart-plus"></i>({toTal})
      </Button>
      <Modal
        title={"Total Payment:" + toTalMoney + "$"}
        centered
        open={open}
        onOk={() => Contine(productCart)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <div>
          <Radio.Group
            onChange={({ target: { value } }) => {
              setSelectionType(value);
            }}
            value={selectionType}
          ></Radio.Group>
          <Divider />
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            tableLayout={"fixed"}
          />
        </div>
      </Modal>
    </>
  );
}
