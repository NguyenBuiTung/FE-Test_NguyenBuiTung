import { createSlice } from "@reduxjs/toolkit";
import { ACCESSTOKEN, http, settings, USER_LOGIN } from "../../util/config";
import { getProductOrderApi } from "./reducerProducts";

const initialState = {
  userLogin: {},
  userRegister: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      //B1: Lấy dữ liệu payload
      const userLogin = action.payload;
      //B2: Cập nhật lại state

      state.userLogin = userLogin;
    },
    registerAction: (state, action) => {
      const userRegister = action.payload;
      state.userRegister = userRegister;
    },
  },
});

export const { loginAction, registerAction } = userReducer.actions;

export default userReducer.reducer;

//-------------- async action ----------

/**
 *
 * @param {*} userLogin userLogin : {email:'', password:''}
 * @returns trả về action loại 2 action = (dispatch) => {}
 */
export const loginApi = (userLogin) => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/signin", userLogin);
    //sau khi lấy dữ liệu tạo ra actionCreator = {type:,payload}
    console.log(result);
    const action = loginAction(result.data.content);
    // console.log(action);
    await dispatch(action);
    const actionOrder = getProductOrderApi();
    dispatch(actionOrder);
    //Lưu vào localstorage và cookie
    // settings.setStorageJson(USER_LOGIN, result.data.content);
    settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);
    // settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  };
};
export const registerApi = (userRegister) => {
  return async () => {
    await http.post("/api/Users/signup", userRegister);

    // console.log(result);
    // const action = registerAction(result.data.content);
    // await dispatch(action);
  };
};
