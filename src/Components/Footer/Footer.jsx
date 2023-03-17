import React from "react";
import { NavLink } from "react-router-dom";
// import ScrollToTop from "../ScrollToTop/ScrollToTop";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row footer-home">
          <div className="footer-card">
            <div className="d-flex align-items-center">
              <NavLink to="/home">
                {" "}
                <img className="logo-footer" src="https://bota.vn/wp-content/themes/bncgroup/images/logo_bota.png" alt="" />
              </NavLink>
             
              
            </div>
            <ul>
              <li className="bota">CÔNG TY CỔ PHẦN CÔNG NGHỆ BOTA</li>
              <li><span>Trụ sở chính:</span> Tầng 8 TTTM Vân Hồ, Số 51 Lê Đại Hành, P. Lê Đại Hành – Q. Hai Bà Trưng – Tp.Hà Nội</li>
              <li><span>Chi nhánh HCM:</span> Tầng 3 tòa nhà TienLoc Building</li>
              <li> 155-157 An Dương Vương – Phường 8</li>
              <li>  Quận 5 – Tp.HCM</li>
              <li> <span>CN Vinh:</span> Tầng 15 Tòa Nhà TECCO B Quang Trung </li>
              <li>   TP Vinh - Nghệ An</li>
              <li><a className='mailto' href= "mailto:contact@bota.com.vn">Email: contact@bota.com.vn</a></li>
            </ul>
          </div>
          <div className="footer-card">
            <h2>Sản Phẩm</h2>
            <ul>
              <li>Pos</li>
              <li>Web</li>
              <li>Chat</li>
              <li>Bmedia</li>
            </ul>
          </div>
          <div className="footer-card">
            <h2>Giới Thiệu</h2>
            <ul>
              <li>Về chúng tôi</li>
              <li>Tin tức</li>
              <li>Tuyển dụng</li>
              <li>Báo chí</li>
          
            </ul>
          </div>
          <div className="footer-card ">
            <h2>Hỗ trợ</h2>
            <ul>
            <li>Hỗ trợ kĩ thuật </li>
            <li>Hotline kinh doanh </li>
            <li>Hotline HCM </li>
            <li>Phần mềm Bota pos</li>
            </ul>
          </div>
          <div className="footer-card ">
            <h2>Kết Nối</h2>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-skype"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
            <img className="image-footer" src="https://bota.vn/wp-content/themes/bncgroup/images/web/bocongthuong.png" alt="" />
            <img className="image-footer2" src="https://images.dmca.com/Badges/dmca_protected_sml_120ac.png?ID=f56b5339-7489-4002-8eca-0fc186c5fbcf" alt="" />
          </div>
        </div>
        
      </div>
      <div className="footer-bot">
          <p className="content-footer">
          Copyright © 2019 bota.vn - Giải pháp quản lý và bán hàng đa kênh toàn diện
          </p>
          
        </div>
      {/* <ScrollToTop/> */}
    </div>
  );
}
