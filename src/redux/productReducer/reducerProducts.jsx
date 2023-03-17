import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";
import _ from "lodash";
const initialState = {
  productCart: [],
  carts: [],
  orders: {},
};

const reducerProducts = createSlice({
  name: "reducerProducts",
  initialState,
  reducers: {
    productCartAction: (state, action) => {
      state.productCart = action.payload;
    },
    cartAction: (state, action) => {
      const addCart = action.payload;
      const updateCart = [...state.carts];
      const index = updateCart.findIndex(
        (sp) => sp.id === addCart.id && sp.values.size === addCart.values.size
      );
      if (index !== -1) {
        updateCart[index].values.quantity += addCart.values.quantity;
      } else {
        updateCart.push(addCart);
      }
      state.carts = updateCart;
    },
    deleteAction: (state, action) => {
      const delCart = action.payload;
      // console.log(delCart);
      const updateCart = [...state.carts];
      const index = updateCart.findIndex(
        (sp) => sp.id === delCart.id && sp.values.size === delCart.values.size
      );

      updateCart.splice(index, 1);
      state.carts = updateCart;
    },
    softCartAction: (state, action) => {
      const softCart = action.payload;
      const newSoft = _.orderBy(softCart, ["price"], ["asc"]);
      state.carts = newSoft;
    },
    softCartActionHigh: (state, action) => {
      const softCart = action.payload;
      const newSoft = _.orderBy(softCart, ["price"], ["desc"]);
      state.carts = newSoft;
    },
    orderAction: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const {
  productCartAction,
  cartAction,
  deleteAction,
  softCartAction,
  softCartActionHigh,
  orderAction,
} = reducerProducts.actions;

export default reducerProducts.reducer;
export const productCartApi = (index) => {
  return async (dispatch) => {
    const result = await http.get(
      `/api/Product/getpaging?pageIndex=${index}&pageSize=6`
    );
    const action = productCartAction(result.data.content.items);
    dispatch(action);
  };
};
export const oderSuccessApi = (cart) => {
  return async (dispatch) => {
    await http.post("/api/Users/order", cart);
    const action = getProductOrderApi();
    dispatch(action);
  };
};
export const getProductOrderApi = () => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/getProfile");
    const action = orderAction(result.data.content);
    // console.log('action: ', action);
    dispatch(action);
  };
};
export const deleteOrderApi = (id) => {
  return async (dispatch) => {
    await http.post("/api/Users/deleteOrder", id);
    const action = getProductOrderApi();
    dispatch(action);
  };
};
