import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ACCESSTOKEN, settings, USER_LOGIN } from "../../util/config";
import "../../assets/scss/components/_HeaderHome.scss";
import { persistor } from "../../redux/configStore";
export default function HeaderHome() {
  // const navigate=useNavigate()
  const { userLogin } = useSelector(
    (state) => state.persistedReducer.userReducer
  );
  const { carts } = useSelector(
    (state) => state.persistedReducer.reducerProducts
  );
  const Logout = () => {
    // console.log('tung');
    persistor.pause();
    persistor.flush().then(() => {
      localStorage.removeItem(ACCESSTOKEN);
      window.location.href = "/login";
      return persistor.purge();
    });
  };
  const toTal = carts.length;
  const renderLogin = () => {
    if (userLogin.accessToken) {
      return (
        <div className="header-btn">
          <NavLink className="header-cart" to="cart">
            {" "}
            <img src="/img/icons8-shopee-48.png" alt="" />({toTal})
          </NavLink>

          <NavLink className="profile-btn" to="/shop">
            Cửa hàng
          </NavLink>

          <button
            className="nav-link"
            style={{ border: "none" }}
            onClick={() => {
              // settings.eraseCookie(ACCESSTOKEN, 0);
              // localStorage.removeItem(USER_LOGIN);

              Logout();
              // persistor.purge()
              // window.location.href='/login'
            }}
          >
            Đăng xuất
            <i className="fa fa-sign-out-alt ms-2"></i>
          </button>
        </div>
      );
    }
    return (
      <NavLink className="nav-link login-return" to="/login">
        Đăng nhập
      </NavLink>
    );
  };
  return (
    <div className="header-home">
      <div className="header">
        <div className="logo-header">
          <NavLink to="/">
            {" "}
            <img
              src="https://bota.vn/wp-content/themes/bncgroup/images/logo_bota.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="signin">
          <div className="signinbutton"> {renderLogin()}</div>
        </div>
      </div>
    </div>
  );
}
// export const userLogin= userLogin
