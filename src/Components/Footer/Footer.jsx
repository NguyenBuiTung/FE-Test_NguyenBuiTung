import React from "react";
import { NavLink } from "react-router-dom";
// import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row footer-home">
          <div className="col-3">
            <div className="d-flex align-items-center">
              <NavLink to="/home">
                {" "}
                <img src="./img/Rectangle 32.png" alt="" />
              </NavLink>
              <NavLink to="/home">
                {" "}
                <img src="./img/Rectangle 33.png" alt="" />
              </NavLink>
              <h2>DataWarehouse</h2>
            </div>
            <ul>
              <li>Warehouse Society, 234</li>
              <li>Bahagia Ave Street PRBW 29281</li>
              <li>info@warehouse.project 1-232-3434 (Main)</li>
              <li></li>
            </ul>
          </div>
          <div className="col-3">
            <h2>About</h2>
            <ul>
              <li>Profile</li>
              <li>Futures</li>
              <li>Careers</li>
              <li>DW News</li>
            </ul>
          </div>
          <div className="col-3">
            <h2>Help</h2>
            <ul>
              <li>Support</li>
              <li>Signin</li>
              <li>Guide</li>
              <li>Report</li>
              <li>Q&A</li>
            </ul>
          </div>
          <div className="col-3">
            <h2>Social Media</h2>
            <img src="/img/Ellipse 47.png" alt="" />
            <img src="/img/Ellipse 47.png" alt="" />
            <img src="/img/Ellipse 47.png" alt="" />
          </div>
        </div>
        <div className="footer-bot">
          <p>
            © Datawarehouse™, 2020. All rights reserved. Company Registration
            Number: 21479524.
          </p>
          
        </div>
      </div>

      {/* <ScrollToTop/> */}
    </div>
  );
}
