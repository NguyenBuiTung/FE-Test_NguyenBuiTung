// //rxslice
// import { createSlice } from "@reduxjs/toolkit";
// // import axios from 'axios';
// import { http, settings } from "../../util/config";
// import _ from "lodash";
// const initialState = {
//   arrProduct: [
//     {
//       id: 1,
//       name: "Adidas Prophere",
//       alias: "adidas-prophere",
//       price: 350,
//       description:
//         "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//       size: "[36,37,38,39,40,41,42]",
//       shortDescription:
//         "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//       quantity: 995,
//       deleted: false,
//       categories:
//         '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
//       relatedProducts: "[2,3,5]",
//       feature: true,
//       image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
//     },
//   ],
//   productDetail: {},
//   productCart: [],
//   productSearch: [],
// };

// const productReducer = createSlice({
//   name: "productReducer",
//   initialState,
//   reducers: {
//     getDataProductAction: (state, action) => {
//       //B1: Lấy dữ liệu từ payload
//       let arrProduct = action.payload;
//       state.arrProduct = arrProduct;
//     },
//     getDataProductDetail: (state, action) => {
//       //B1: Lấy dữ liệu từ payload
//       let productDetail = action.payload;
//       //B2: cập nhật state
//       state.productDetail = productDetail;
//     },
//     getProductCart: (state, action) => {
//       let addToCart = action.payload;
//       //   console.log(addToCart)
//       let updateCart = [...state.productCart];
//       // console.log(updateCart);
//       let index = updateCart.findIndex(
//         (sp) =>
//           sp.carts.id === addToCart.carts.id && sp.newSize === addToCart.newSize
//       );
//       if (index !== -1) {
//         updateCart[index].quantitynew += addToCart.quantitynew;
//       } else {
//         updateCart.push(addToCart);
//       }
//       state.productCart = updateCart;
//       // settings.setStorageJson('carts',state.productCart)
//     },
//     deleteCarts: (state, action) => {
//       let del = action.payload;
//       // console.log(del)
//       let updateCart = [...state.productCart];
//       let index = updateCart.findIndex(
//         (sp) => sp.carts.id && sp.sizechon === del.carts.id && del.sizechon
//       );
//       updateCart.splice(index, 1);
//       // localStorage.removeItem('updateCart')
//       state.productCart = updateCart;
    
//     },
//     handleChange: (state, action) => {
//       let change = action.payload;
//       console.log(change);
//       let updateCarts = [...state.productCart];
//       let index = updateCarts.findIndex(
//         (item) =>
//           item.newSize === change.item.newSize &&
//           item.carts.id === change.item.carts.id
//       );
//       if (index !== -1) {
//         updateCarts[index].quantitynew = change.value;
//       }

//       state.productCart = updateCarts;
//     },
//     getDataProductSearch: (state, action) => {
//       let arrSearch = action.payload;
//       state.productSearch = arrSearch;
//     },
//     handleSearchLow: (state, action) => {
//       let arrSearch = action.payload;
//       let newArrSearch = _.orderBy(arrSearch, ["price"], ["esc"]);
//       state.productSearch = newArrSearch;
//     },
//     handleSearchHigh: (state, action) => {
//       let arrSearch = action.payload;
//       let newArrSearch = _.orderBy(arrSearch, ["price"], ["desc"]);
//       state.productSearch = newArrSearch;
//     },
//     getSubmitCart: (state, action) => {
//       let submit = action.payload;
//       state.productCart = submit;
//     },
//   },
// });

// export const {
//   getDataProductAction,
//   getDataProductDetail,
//   getProductCart,
//   deleteCarts,
//   handleChange,
//   getDataProductSearch,
//   handleSearchLow,
//   handleSearchHigh,
//   getSubmitCart
// } = productReducer.actions;

// export default productReducer.reducer;

// /*------------------------async action -------------- */
// export const getProductApi = () => {
//   return async (dispatch) => {
//     //Xử lý api
//     let result = await http.get("/api/Product");
//     //Sau khi lấy dữ liệu từ api về => dispatch lên reducer
//     //Tạo ra action creator đưa dữ liệu lên reducer
//     const action = getDataProductAction(result.data.content);
//     // console.log(action)
//     dispatch(action);
//   };
// };
// export const getProductSearchApi = (keyword) => {
//   return async (dispatch) => {
//     //Xử lý api
//     let result = await http.get(`/api/Product?keyword=${keyword}`);
//     //Sau khi lấy dữ liệu từ api về => dispatch lên reducer
//     //Tạo ra action creator đưa dữ liệu lên reducer
//     const action = getDataProductSearch(result.data.content);
//     // console.log(action)
//     dispatch(action);
//   };
// };

// //cài npm i axios
// export const getProductDetailApi = (id) => {
//   return async (dispatch) => {
//     //Gọi api
//     try {
//       let result = await http.get("/api/Product/getbyid?id=" + id);
//       //Sau khi lấy dữ liệu từ api về => dispatch lên reducer
//       //Tạo ra action creator đưa dữ liệu lên reducer
//       const action = getDataProductDetail(result.data.content);
//       // console.log(action);
//       dispatch(action);
//     } catch (err) {}
//   };
// };
// export const getSubmitCartApi = () => {
//   return async (dispatch) => {
//     //Gọi api
//     try {
//       let result = await http.get('/api/Users/order');
//       //Sau khi lấy dữ liệu từ api về => dispatch lên reducer
//       //Tạo ra action creator đưa dữ liệu lên reducer
//       const action = getSubmitCart(result.data.content);
//       // console.log(action);
//       dispatch(action);
//     } catch (err) {}
//   };
// };
