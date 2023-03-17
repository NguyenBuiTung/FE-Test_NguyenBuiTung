import React from "react";
import { Outlet } from "react-router-dom";
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import Footer from "../../Components/Footer/Footer";
export default function ShopTemplate() {
  return (
    <div>
      <HeaderHome />
      <Outlet />
      <Footer />
    </div>
  );
}
