// import { Carousel } from 'antd';
import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="carousel">
        <div className="container carousel_row">
          <div className="carousel-left">
            <h1>Giải pháp quản lý và bán hàng đa kênh toàn diện.</h1>
            <h3>
              <span>100000+</span>
              doanh nghiệp và các chủ shop đã tin tưởng sử dụng giải pháp quản
              lý & bán hàng đa kênh .
            </h3>
            <NavLink to='/cart' className="btn-learnmore">Dùng Thử Mất Tiền</NavLink>
          </div>
          <div className="carousel-right">
            <img
              src="https://bota.vn/wp-content/themes/bncgroup/images/360/banner1.svg"
              alt=""
            />
          </div>
        </div>
        <div className="features">
          <div className="container">
            <div className="future-top">
              <h2>
                Bota-là tất cả những gì doanh nghiệp cần có cho việc kinh doanh
              </h2>
            </div>
            <div className="feature-body">
              <div className="">
                <section className="carousel row">
                  {/* <h2 className="categories__title">My List</h2> */}
                  <div className="carousel__container">
                    <div className="carousel-item ">
                      <img
                        className="carousel-item__img"
                        src="https://bota.vn/wp-content/themes/bncgroup/images/360/icon_pos.png"
                        alt="people"
                      />
                      <div className="carousel-item__details">
                        <div className="controls">
                          <span className="fas fa-play-circle" />
                          <span className="fas fa-plus-circle" />
                        </div>
                        <h5 className="carousel-item__details--title">
                        Phần mềm quản lý bán hàng toàn diện nhất
                        </h5>
                        
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img
                        className="carousel-item__img"
                        src="https://bota.vn/wp-content/themes/bncgroup/images/360/icon_web.png"
                        alt="people"
                      />
                      <div className="carousel-item__details">
                        <div className="controls">
                          <span className="fas fa-play-circle" />
                          <span className="fas fa-plus-circle" />
                        </div>
                        <h5 className="carousel-item__details--title">
                        Thiết kế website chuẩn SEO, giao diện tùy biến
                        </h5>
                       
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img
                        className="carousel-item__img"
                        src="https://bota.vn/wp-content/themes/bncgroup/images/360/icon_vipchat.png"
                        alt="people"
                      />
                      <div className="carousel-item__details">
                        <div className="controls">
                          <span className="fas fa-play-circle" />
                          <span className="fas fa-plus-circle" />
                        </div>
                        <h5 className="carousel-item__details--title">
                        Giúp bạn theo dõi và trò chuyện với người truy cập website
                        </h5>
                      
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img
                        className="carousel-item__img"
                        src="https://bota.vn/wp-content/themes/bncgroup/images/360/icon_bmedia.png"
                        alt="people"
                      />
                      <div className="carousel-item__details">
                        <div className="controls">
                          <span className="fas fa-play-circle" />
                          <span className="fas fa-plus-circle" />
                        </div>
                        <h5 className="carousel-item__details--title">
                        Dịch vụ Facebook ads, Google Ads, Zalo Marketing
                        </h5>
                       
                      </div>
                    </div>
                  </div>
                </section>
                <div className="text-center mt-5">
                <NavLink className='btn-dangki'>Đăng kí dùng thử mất tiền</NavLink>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      
      </div>
      {/* <div className="omichanel">
        <h2>
        Bota - Giúp bạn quản lý bán hàng đa kênh với mọi loại hình kinh doanh
        </h2>
          <div className="omichanel-left">

          </div>
          <div className="omichanel-right"></div>
      </div> */}
    </div>
  );
}
