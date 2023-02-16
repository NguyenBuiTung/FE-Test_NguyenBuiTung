import { createSlice } from "@reduxjs/toolkit";
import { ACCESSTOKEN, http, REFESHTOKEN, settings, USER_LOGIN } from "../../util/config";

const initialState = {
  userLogin: {},
  userProfile: {},
  userRegister:{}
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
    
  },
});

export const { loginAction, } = userReducer.actions;

export default userReducer.reducer;

//-------------- async action ----------

/**
 *
 * @param {*} userLogin userLogin : {email:'', password:''}
 * @returns trả về action loại 2 action = (dispatch) => {}
 */
export const loginApi = (userLogin) => {
  return async (dispatch) => {
    const result = await http.post("/auth/login",userLogin);
    //sau khi lấy dữ liệu tạo ra actionCreator = {type:,payload}
    console.log(result)
    const action = loginAction(result.accessToken);
    console.log(action);  
    await dispatch(action);
    //Lưu vào localstorage và cookie
    settings.setStorageJson(USER_LOGIN, result);
    settings.setStorage(ACCESSTOKEN, result.accessToken);
    settings.setStorage(REFESHTOKEN, result.refeshToken);
    settings.setCookie(ACCESSTOKEN, result.accessToken, 30);
  };
};





