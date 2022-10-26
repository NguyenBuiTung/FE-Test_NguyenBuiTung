import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductApi } from "../../redux/productReducer/productReducer";

export default function Home() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //ham nay se chay 1 lan sau khi compunent load xong giao dien
    const action = getProductApi();
    dispatch(action);
  }, []);
  return (
    <div>
      <div className="carousel"></div>
      <div className="container">
        <h3>Product List</h3>
        <div className="row">
          {arrProduct.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <img
                    className="card-img-top w-100"
                    src={item.image}
                    alt="Title"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.price}</p>
                    <NavLink
                      to={`/detail/${item.id}`}
                      className="btn btn-warning"
                    >
                      Add to cart <i className="fas fa-cart-plus    "></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
