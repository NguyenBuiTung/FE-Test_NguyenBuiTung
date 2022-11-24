// import { Carousel } from 'antd';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductApi } from "../../redux/productReducer/productReducer";
import Carousel_Shoe from "./Carousel_Shoe";
export default function Home_Mobile() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  // const stateA = useSelector(state => state.productReducer.stateA);

  useEffect(() => {
    //Hàm này sẽ 1 lần sau khi component load xong giao diện
    //Gọi api
    const action = getProductApi();
    /*
     action = async dispatch => {
          //Xử lý api
          let result = await axios({
              url:'https://shop.cyberlearn.vn/api/Product',
              method:'GET'
          });
          //Sau khi lấy dữ liệu từ api về => dispatch lên reducer
          //Tạo ra action creator đưa dữ liệu lên reducer
          const action = getDataProductAction(result.data.content);
          dispatch(action);
      }
    */
    dispatch(action);
  }, []);

  return (
    <div>
      <div className="carousel">
        <Carousel_Shoe />
      </div>
      <div className="container product">
        <h2>Product Feature</h2>
        <div className="row product-home">
          {arrProduct.map((prod, index) => {
            return (
              <div className="col-12  product-col" key={index}>
                <div className="card product-card">
                  <img className="img-fluid" src={prod.image} alt="..." />
                  <i className="fas fa-heart    "></i>
                  <div className="card-body">
                    <h3 className="fs-5">{prod.name}</h3>
                    <p className="fs-6">
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
                      <h5 className="w-50 p-2">{prod.price}$</h5>
                    </div>
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
