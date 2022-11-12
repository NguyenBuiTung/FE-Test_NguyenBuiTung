import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Search from "./Pages/Search/Search";
import Profile from "./Pages/Profile/Profile";
import Detail from "./Pages/Detail/Detail";
//Import css tất cả vào index.js
import "./index.scss";
//Cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
//Cấu hình history (Chuyển hướng trang không dùng hook)
import {
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { createBrowserHistory } from "history";
// import UserTemplate from "./templates/UserTemplate/UserTemplate";
import ResponsiveItem from "./HOC/ResponsiveItem/ResponsiveItem";
import Home_Mobile from "./Pages/Home/Home_Mobile";
import HomeTemPlate from './template/HomeTemplate/HomeTemPlate'
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<HomeTemPlate/>}>
          <Route
            index
            element={
              <ResponsiveItem component={Home} mobileComponent={Home_Mobile} />
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route path="*" element={<Navigate to={""} />}></Route>
        </Route>

        {/* <Route path="user" element={<UserTemplate />}>
          <Route index element={<Login />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route> */}
      </Routes>
    </HistoryRouter>
  </Provider>
);
