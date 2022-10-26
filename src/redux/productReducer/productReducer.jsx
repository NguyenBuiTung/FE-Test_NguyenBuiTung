import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import { https } from "../../util/config";
// import { useParams } from "react-router-dom";
// import axios from 'axios';

const initialState = {
  arrProduct: [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[2,3,5]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    },
  ],
  productDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getDataProductAction: (state, action) => {
      let arrProduct = action.payload;
      state.arrProduct = arrProduct;
    },
    getDataDetailAction: (state, action) => {
      let productDetail = action.payload;
      state.productDetail = productDetail;
    },
  },
});

export const { getDataProductAction, getDataDetailAction } =
  productReducer.actions;

export default productReducer.reducer;
// aysnc action

export const getProductApi = () => {
  return async (dispatch) => {
    let result = await https.get("/api/Product");
    //Sau khi lay du lieu tu api ve => dispatch len reducer
    //Tao ra aciton creator dua du lieu len reducer
    const action = getDataProductAction(result.data.content);
    dispatch(action);
  };
};
export const getDetailApi = (id) => {
  return async (dispatch) => {
    // const params = useParams();
    try {
      let result = await https.get("/api/Product/getbyid?id=" + id);
      const action = getDataDetailAction(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
