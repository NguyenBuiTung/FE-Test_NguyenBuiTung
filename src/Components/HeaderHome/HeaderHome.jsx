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
        <>
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
        </>
      );
    }
    return (
      <NavLink className="nav-link login-return" to="/login">
        Login
      </NavLink>
    );
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-flex headerhome">
        <NavLink className="navbar-brand " to="/home" >
          <img src="./img/image 3.png" alt="cybersoft" />
          {renderLogin()}
        </NavLink>
        {/* <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" /> */}
        <div className="collapse navbar-collapse " id="collapsibleNavId">
          <form className=" my-2 my-lg-0 d-flex align-items-center">
          <ModalSearch/>
          <ModalCart/>
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            </ul>
          </form>
        </div>
      </nav>
     <NavLink to='/home' className='header-end'>Home</NavLink>
     <NavLink className='header-end'>Men</NavLink>
     <NavLink className='header-end'>Women</NavLink>
     <NavLink className='header-end'>Kid</NavLink>
     <NavLink className='header-end'>Sport</NavLink>
    </>
  );
}
