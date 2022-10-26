import React from "react";
import HeaderHome from "../../Compunent/HeaderHome/HeaderHome";
import { Outlet } from "react-router-dom";
export default function HomeTemplate() {
  return (
    <div>
      <HeaderHome />
      <div style={{ minHeight: 650 }}>
        <Outlet />
      </div>
      <footer className="bg-dark text-center text-white p-5">Footer</footer>
    </div>
  );
}
