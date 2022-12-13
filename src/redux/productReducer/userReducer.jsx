import { createSlice } from "@reduxjs/toolkit";
import { ACCESSTOKEN, http, settings, USER_LOGIN } from "../../util/config";

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
    getProfileAction: (state, action) => {
      state.userProfile = action.payload;
    },
    registerAction: (state, action) => {
      const userRegister = action.payload;
      state.userRegister = userRegister;
    },
  },
});

export const { loginAction, getProfileAction,registerAction } = userReducer.actions;

export default userReducer.reducer;

//-------------- async action ----------

/**
 *
 * @param {*} userLogin userLogin : {email:'', password:''}
 * @returns trả về action loại 2 action = (dispatch) => {}
 */
export const loginApi = (userLogin) => {
  return async (dispatch) => {
    const result = await http.post("/api/users/signin", userLogin);
    //sau khi lấy dữ liệu tạo ra actionCreator = {type:,payload}
    const action = loginAction(result.data.content);
    // console.log(action);
    await dispatch(action);
    //Thay vì sau khi đăng nhập xong gọi api get profile thì logic đó mình đã code rồi => bây giờ chỉ cần dùng dispatch để gọi lại
    //dispatch lại logic của 1 action async
    const actionGetProfile = getProfileApi();
    dispatch(actionGetProfile);
    //Lưu vào localstorage và cookie
    settings.setStorageJson(USER_LOGIN, result.data.content);
    settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);
    settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  };
};

export const getProfileApi = () => {
  return async (dispatch) => {
    const result = await http.post("/api/users/getprofile");
    const action = getProfileAction(result.data.content);
    dispatch(action);
  };
};

// export const loginFacebookApi = (tokenFBApp) => {
//   return async (dispatch) => {
//     const result = await http.post("/api/Users/facebooklogin", {
//       facebookToken: tokenFBApp,
//     });
//     //sau khi lấy dữ liệu tạo ra actionCreator = {type:,payload}
//     const action = loginAction(result.data.content);
//     await dispatch(action);

//     const actionGetProfile = getProfileApi();
//     dispatch(actionGetProfile);

//     //Lưu vào localstorage và cookie
//     settings.setStorageJson(USER_LOGIN, result.data.content);

//     settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);

//     settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
//   };
// };

export const registerAapi = (userRegister) => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/signup", userRegister);
    //sau khi lấy dữ liệu tạo ra actionCreator = {type:,payload}
    const action = registerAction(result.data.content);
    // console.log(action);
    await dispatch(action);

    //Thay vì sau khi đăng nhập xong gọi api get profile thì logic đó mình đã code rồi => bây giờ chỉ cần dùng dispatch để gọi lại

    //dispatch lại logic của 1 action async
    // const actionGetProfile = getProfileApi();
    // dispatch(actionGetProfile)

    //Lưu vào localstorage và cookie
    settings.setStorageJson(USER_LOGIN, result.data.content);

    settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);

    settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  };
};
