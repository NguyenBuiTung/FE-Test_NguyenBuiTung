import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getDetailApi } from "../../redux/productReducer/productReducer";

export default function Detail() {
  const { productDetail } = useSelector((state) => state.productReducer);
  const { id } = useParams();
  // console.log(id)
  // console.log(productDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getDetailApi(id);
    dispatch(action);
  }, [id]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 mt-2">
          <img src={productDetail.image} alt="" className="w-100" />
        </div>
        <div className="col-8 mt-2">
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
        </div>
      </div>
      <h3>Related Product</h3>
      <div className="mt-2 row">
        {productDetail.relatedProducts?.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <img className="card-img-top w-100" src={item.image} alt="Title"/>
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.price}</p>
                  <NavLink
                    className="btn btn-warning"
                    to={`/detail/${item.id}`}
                  >
                    View Detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
