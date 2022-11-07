import React from 'react'
import HeaderHome from '../../Components/HeaderHome/HeaderHome'
import {Outlet} from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
export default function HomeTemplate() {
  return (
    <div>
        <HeaderHome />
        <div style={{marginBottom:'30px'}}>
          <Outlet></Outlet>
        </div>
        <Footer/>
    </div>
  )
}
