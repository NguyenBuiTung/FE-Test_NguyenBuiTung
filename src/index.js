import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
// import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login/Login";

// import Profile from "./Pages/Profile/Profile";

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

import HomeTemPlate from "./template/HomeTemplate/HomeTemPlate";
// import Register from "./Pages/Login/Register";
// import Cart from "./Pages/Cart/Cart";
import { PrivateRoute } from "./Components/PrivateRouter/PrivateRouter";
// import Oder from "./Pages/Oder/Oder";
// import TemplateBeautiful from "./template/TemplateBeautiful/TemplateBeautiful";
const Home = React.lazy(() => import("./Pages/Home/Home"));
const Login = React.lazy(() => import("./Pages/Login/Login"));
const Register = React.lazy(() => import("./Pages/Login/Register"));
const Profile = React.lazy(() => import("./Pages/Profile/Profile"));
const Cart = React.lazy(() => import("./Pages/Cart/Cart"));
const Oder = React.lazy(() => import("./Pages/Oder/Oder"));

export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeTemPlate />}>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/shop" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<Oder />} />
            </Route>
            <Route path="/shop" element={<Profile />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/order" element={<Oder />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="*" element={<Navigate to={"home"} />}></Route>
          </Route>
        </Routes>
      </React.Suspense>
    </HistoryRouter>
    {/* </PersistGate> */}
  </Provider>
);
