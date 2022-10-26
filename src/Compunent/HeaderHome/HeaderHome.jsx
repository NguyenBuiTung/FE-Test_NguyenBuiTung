import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// import { useEffect } from "react";
export default function HeaderHome() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const renderLogin = () => {
    if (userLogin.email) {
      return (
        <NavLink className="nav-link" to="/profile">
          Hello {userLogin.email}
        </NavLink>
      );
    }
    return (
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
    );
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/home">
        Shoes Shop
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/home" aria-current="page">
              Home <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">{renderLogin()}</li>
          {/* <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" href="#">
                Action 1
              </NavLink>
              <NavLink className="dropdown-item" href="#">
                Action 2
              </NavLink>
            </div>
          </li> */}
        </ul>
        <form className="d-flex my-2 my-lg-0">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
