import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemPlate/HomeTemplate";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Search from "./Pages/Search/Search";
import Profile from "./Pages/Profile/Profile";
import Detail from "./Pages/Detail/Detail";
//Import tat ca css vao index.js
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
//Cau hinh history (Chuyen huong trang ko dung hook)
import { unstable_HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
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
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
