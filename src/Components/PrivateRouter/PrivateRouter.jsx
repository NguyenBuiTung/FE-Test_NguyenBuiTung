import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { userLogin } = useSelector(
    (state) => state.persistedReducer.userReducer
  );
  return userLogin.accessToken ? <Outlet /> : <Navigate to="/login" />;
};
