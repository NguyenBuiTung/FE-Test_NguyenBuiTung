import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

import Profile from "./Pages/Profile/Profile";

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
import HomeTemPlate from './template/HomeTemplate/HomeTemPlate'
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<HomeTemPlate/>}>
         
          <Route path="home" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          
         
        
          <Route path="profile" element={<Profile />}></Route>
         
          <Route path="*" element={<Navigate to={""} />}></Route>
        </Route>

       
      </Routes>
    </HistoryRouter>
  </Provider>
);
