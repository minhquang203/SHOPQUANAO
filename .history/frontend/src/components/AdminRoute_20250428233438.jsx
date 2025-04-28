import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentRole } from "../redux/authSlice";

const AdminRoute = () => {
  const role = useSelector(selectCurrentRole);
  
  // Nếu là admin thì render children, không thì chuyển hướng
  return role === "admin" ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;