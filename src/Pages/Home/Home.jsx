// import { Carousel } from 'antd';
import React from "react";

export default function Home() {
  
  return (
    <div>
      <div className="carousel">
        <div className="container d-flex">
          <div className="carousel-left">
            <h1>Save your data storage here.</h1>
            <h3>
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </h3>
            <button className="btn-learnmore">Learn more</button>
          </div>
          <div className="carousel-right">
            <img src="./img/image1 1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="features">
        <div className="container">
          <div className="future-top">
            <h2>Features</h2>
            <p>
              Some of the features and advantages that we provide for those of
              you who store data in this Data Warehouse.
            </p>
          </div>

          <div className="feature-body">
            <div className="row">
              <div className="col-6">
                <div className="item item1">
                  <div className="item-left">
                    <img src="img/image3 1.png" alt="" />
                  </div>
                  <div className="item-right">
                    <h3>Search Data</h3>
                    <p className="content-future">
                      Don’t worry if your data is very large, the Data Warehoue
                      provides a search engine, which is useful for making it
                      easier to find data effectively saving time.
                    </p>
                    <span>
                      <h4 className="d-inline-block me-2">Learn more</h4>
                      <i className="fas fa-arrow-right "></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="item item2">
                  <div className="item-left">
                    <img src="img/image4.png" alt="" />
                  </div>
                  <div className="item-right">
                    <h3>24 Hours Access</h3>
                    <p className="content-future">
                      Access is given 24 hours a full morning to night and meet
                      again in the morning, giving you comfort when you need
                      data when urgent.
                    </p>
                    <span>
                      <h4 className="d-inline-block me-2">Learn more</h4>
                      <i className="fas fa-arrow-right "></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6 mt-4">
                <div className="item item3">
                  <div className="item-left">
                    <img src="img/image5 1.png" alt="" />
                  </div>
                  <div className="item-right">
                    <h3>Print Out</h3>
                    <p className="content-future">
                      Print out service gives you convenience if someday you
                      need print data, just edit it all and just print it.
                    </p>
                    <span>
                      <h4 className="d-inline-block me-2">Learn more</h4>
                      <i className="fas fa-arrow-right "></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6 mt-4">
                <div className="item item4">
                  <div className="item-left">
                    <img src="img/image6 1.png" alt="" />
                  </div>
                  <div className="item-right">
                    <h3>Security Code</h3>
                    <p className="content-future">
                      Data Security is one of our best facilities. Allows for
                      your files to be safer. The file can be secured with a
                      code or password that you created, so only you can open
                      the file.
                    </p>
                    <span>
                      <h4 className="d-inline-block me-2">Learn more</h4>
                      <i className="fas fa-arrow-right "></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="container">
          <div className="testimonials-bg">
            <h2>Testimonials</h2>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="img/Ellipse 76.png" className="mw-100" alt="..." />
                 <div className="carousel-itemleft">
                 <h2>John Fang </h2>
                  <h3>wordfaang.com</h3>
                  <p>
                    Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                    viverra enim erat tortor ultricies massa turpis. Arcu
                    pulvinar aenean nam laoreet nulla.
                  </p>
                 </div>
                </div>
                <div className="carousel-item">
                  <img src="img/Ellipse 76.png" className="mw-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="img/Ellipse 76.png" className="mw-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
