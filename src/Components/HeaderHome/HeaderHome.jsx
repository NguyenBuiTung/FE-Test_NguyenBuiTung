import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ACCESSTOKEN, settings, USER_LOGIN } from "../../util/config";
import "../../assets/scss/components/_HeaderHome.scss";
import ModalCart from "../ModalCart/ModalCart";
import ModalSearch from "../ModalSearch/ModalSearch";
// import Carousel_Shoe from "../../Pages/Home/Carousel_Shoe";
// import {history} from '../../index';
export default function HeaderHome() {
  const { userProfile } = useSelector((state) => state.userReducer);
  const renderLogin = () => {
    if (userProfile.name) {
      return (
        <div className="header-reponsive">
          <NavLink className="nav-link me-2 login-nav" to="/profile">
            {userProfile.name}
          </NavLink>
          <button
            className="nav-link"
            style={{ background: "none", border: "none" }}
            onClick={() => {
              settings.eraseCookie(ACCESSTOKEN, 0);
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(ACCESSTOKEN);
              //Sau khi đăng xuất xong chuyển về trang login đồng thời reload lại page clear redux
              window.location.href = "/login";
            }}
          >
            Log out
            <i className="fa fa-sign-out-alt ms-2"></i>
          </button>
        </div>
      );
    }
    return (
      <NavLink className="nav-link login-return" to="/login">
        Login
      </NavLink>
    );
  };
  return (
    <div className="header">
      <div class="container">
        <div class="logo">
          <NavLink  to='/home'> <img src="./img/image 3.png" alt="" /></NavLink>
          {renderLogin()}
        </div>
        <nav class="navbar navbar-expand-lg">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ModalCart/>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div className="dropdow">
            <ModalSearch/>
           
           <NavLink className='header-login' to='/login'>Login</NavLink>
           <NavLink className='header-register' to='/register'>Register</NavLink>
            </div>
           
            {/* <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                 <ModalSearch/>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                 <ModalCart/>
                </a>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" aria-current="page" to="/login">
                Login
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              
            </ul> */}
          </div>
        </nav>
      
      </div>
      
    </div>
  );
}
