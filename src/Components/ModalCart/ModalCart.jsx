import { Button, Modal, Divider, Radio, Table, Image } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailApi } from "../../redux/productReducer/productReducer";

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
  const { productCart } = useSelector((state) => state.productReducer);
  // console.log(productDetail);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const action = getProductDetailApi(id);
    dispatch(action);
  }, [id]);

  const [selectionType, setSelectionType] = useState("checkbox");
  const [open, setOpen] = useState(false);
  const data  = [
    {
      id:1,
      name: 'tung',
      img: '32',
      price: 'New York No. 1 Lake Park',
      quantity:<>
       <Button type='primary' className=''>+</Button>
       1
      <Button type='primary' className=''>-</Button>
      </>
      ,
      total:'1',
      action:<>
      <Button type='primary' className='me-2'>Edit</Button>
      <Button type='danger'>Delete</Button>

      </>

    },

  ];
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
        onClick={() => setOpen(true)}
      >
        <i className="fas fa-cart-plus"></i>(0)
      </Button>
      <Modal
        title="Carts"
        centered
        open={open}
        onOk={() => setOpen(false)}
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
          />
        </div>
      </Modal>
    </>
  );
}
