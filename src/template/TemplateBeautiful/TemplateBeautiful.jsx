import Footer from "../../Components/Footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
export default function TemplateBeautiful() {
  return (
    <div className="template">
      <HeaderHome />
      <Outlet />
      <Footer/>
    </div>
  );
}
