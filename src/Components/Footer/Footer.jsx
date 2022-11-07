import React from "react";
import { NavLink } from "react-router-dom"; 
// import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row footer-home">
          <div className="col-4 ">
            <h2>get help</h2>
            <ul>
              <NavLink to='/home'>Home</NavLink>
              <NavLink>Nike</NavLink>
              <NavLink>Adidas</NavLink>
              <NavLink>Contact</NavLink>
            </ul>
          </div>
          <div className="col-4">
            <h2>support</h2>
            <ul>
              <NavLink>About</NavLink>
              <NavLink>Contact</NavLink>
              <NavLink>Help</NavLink>
              <NavLink>Phone</NavLink>
            </ul>
          </div>
          <div className="col-4">
            <h2>Register</h2>
            <ul>
              <NavLink to='/register'>Register</NavLink>
              <NavLink to='/login'>Login</NavLink>
            </ul>
          </div>
        </div>
      </div>
      <p>
        © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.
      </p>
      {/* <ScrollToTop/> */}
    </div>
  );
}
