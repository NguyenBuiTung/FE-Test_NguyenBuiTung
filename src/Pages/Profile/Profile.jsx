import React, { useState } from "react";
import { Table,Button,Input} from "antd";
const { Search } = Input;
const onSearch = (value) => console.log(value);
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Tags",
    dataIndex: "tag",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
   id:`${i}`,
    title: `ABC`,
    description: 'Depcription',
    tag: `HTML,CSS ${i}`,
    action: <Button
    type="danger"
    onClick={() => {
    }}
  >
    Delete
  </Button> , 
  
  
  });
}
export default function Profile() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      name: 'Edward King 0',
      age: '32',
      address: 'London, Park Lane no. 0',
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '32',
      address: 'London, Park Lane no. 1',
    },
  ]);
  const [count, setCount] = useState(2);
  const handleAdd = () => {
    const newData = {
      key:count,
      name: `Edward King ${count}`,
      age: '32',
      address: `London, Park Lane no. ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <div className="profile">
      <div className="profile-left">
        <h4>Post</h4>
        <h4>Logout</h4>
      </div>
      <div className="profile-right">
        <div className="container">
          <div className="table-top">
          <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 0,
        }}
      >
        Add new
      </Button>
      <Search
      placeholder="Title"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
    <Input
      placeholder="Tags"
      
      style={{
        width: 200,
      }}
    />
          </div>

          <Table rowSelection={rowSelection} columns={columns} dataSource={data} tableLayout={"fixed"} />
         
        </div>
      </div>
    </div>
  );
}
