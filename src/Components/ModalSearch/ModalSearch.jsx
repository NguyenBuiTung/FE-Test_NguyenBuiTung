import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  getProductSearchApi,
  handleSearchHigh,
  handleSearchLow,
} from "../../redux/productReducer/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";
const { Search } = Input;
export default function ModalSearch() {
  const { productSearch } = useSelector((state) => state.productReducer);
  let [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onSearch = (value) => {
    setSearchParams({
      //set lai url cua trinh duyet
      keyword: value,
    });
    console.log(value);
    const action = getProductSearchApi(keyword);
    dispatch(action);
  };
  const LowToHigh = (arr) => {
    const action = handleSearchLow(arr);
    dispatch(action);
  };
  const HighToLow = (arr) => {
    const action = handleSearchHigh(arr);
    dispatch(action);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
        icon={<SearchOutlined />}
      >
        Search
      </Button>
      <Modal
        title="Search"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1280}
      >
        <Search
          placeholder="Shoe name"
          enterButton='Search'
          allowClear
          size="large"
          onSearch={onSearch}
        />
        <h2 className="mt-3">Search Result</h2>
        <Button className="d-block mb-2"
          type="primary"
          onClick={() => {
            LowToHigh(productSearch);
          }}
        >
          Low To High
        </Button>
        <Button
          type="primary"
          onClick={() => {
            HighToLow(productSearch);
          }}
        >
          High To Low
        </Button>
        <div className="row product-home">
          {productSearch.map((prod, index) => {
            return (
              <div className="col-4  product-col" key={index}>
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
                        to={`/detail/${prod.id}?price=${prod.price}`}
                        className=" w-50 button-buy"
                      >
                        Buy Now <i className="fa fa-cart-plus"></i>
                      </NavLink>
                      <h5 className="w-50">{prod.price}$</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
}
