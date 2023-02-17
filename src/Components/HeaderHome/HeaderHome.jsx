import React from "react";
// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ACCESSTOKEN, settings, USER_LOGIN } from "../../util/config";
import "../../assets/scss/components/_HeaderHome.scss";
// console.log(USER_LOGIN)
export default function HeaderHome() {
  // const { REFESHTOKEN } = useSelector((state) => state.userReducer);
  const renderLogin = () => {
    if (false) {
      return (
        <div className="header-btn">
          <NavLink className='profile-btn' to='/profile'>Profile</NavLink>
          
            <button
              className="nav-link"
              style={{ border: "none" }}
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
          <NavLink to="/home">
            {" "}
            <img src="./img/Rectangle 32.png" alt="" />
          </NavLink>
          <NavLink to="/home">
            {" "}
            <img src="./img/Rectangle 33.png" alt="" />
          </NavLink>
        </div>
        <div className="signin">
          <div className="signinbutton"> {renderLogin()}</div>
        </div>
      </div>
    </div>
  );
}
