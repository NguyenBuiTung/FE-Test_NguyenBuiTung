import React from 'react'
import { NavLink } from 'react-router-dom'
// import Carousel from '../../assets/scss/components/_Carousel.scss'
export default function Carousel_Shoe() {
  return (
   <div>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="me-3" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" className="me-3" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" className="active" aria-current="true" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item">
        <img src="./img/image 4.png" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>FlyWire</h5>
          <p>Product description...</p>
          <NavLink className="button" to={'/login'}>Buy now</NavLink>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./img/image 4.png" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>FlyWire</h5>
          <p>Product description...</p>
          <NavLink className="button" to={'/login'}>Buy now</NavLink>
        </div>
      </div>
      <div className="carousel-item active">
        <img src="./img/image 4.png" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>FlyWire</h5>
          <p>Product description...</p>
          <NavLink className="button" to={'/login'}>Buy now</NavLink>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span  aria-hidden="true">
        <i className="fa fa-angle-left text-black" />
      </span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span  aria-hidden="true">
        <i className="fa fa-angle-right text-black" />
      </span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

  )
}
