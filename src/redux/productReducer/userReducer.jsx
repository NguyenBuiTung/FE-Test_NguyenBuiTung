import { createSlice } from "@reduxjs/toolkit";
import { ACCESSTOKEN, https, settings, USER_LOGIN } from "../../util/config";

const initialState = {
  //Neu localstore co du lieu => load du lieu defaul cho state .userLogin cua redux,neu localstore khog co thi gan object{}
  userLogin: settings.getStorageJson(USER_LOGIN)
    ? settings.getStorageJson(USER_LOGIN)
    : {},
  userProfile: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      const userLogin = action.payload;
      state.userLogin = userLogin;
    },
    getProfileAction: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { loginAction, getProfileAction } = userReducer.actions;

export default userReducer.reducer;

/**
 *
 * @param {*} userLogin :{email,password}
 * @returns tra ve action loai 2 ={dispatch}={}
 */
export const loginApi = (userLogin) => {
  // console.log(userLogin);
  return async (dispatch) => {
    // console.log("first");
    const result = await https.post("/api/users/signin", userLogin);
    const action = loginAction(result.data.content);
    dispatch(action);
    //Luu vao localstore va cookie
    settings.setStorageJson(USER_LOGIN, result.data.content);
    settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);
    settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  };
};
export const getProfileApi = () => {
  // try {
  return async (dispatch) => {
    // console.log("first");
    const result = await https.post("/api/Users/getProfile");
    const action = getProfileAction(result.data.content);
   
    
  };
  // } catch (err) {
  //   if (err.reponse?.status === 401) {
  //     alert("Dang nhap de vao trang nay");
  //     navigate('/login')
  //   }
  // }
};
