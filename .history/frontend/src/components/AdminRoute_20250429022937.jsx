import React from 'react'; // Thêm dòng này nếu chưa có
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../redux/authSelectors"; // Đường dẫn tới authSelectors

function AdminRoute() {
  const user = useSelector(selectCurrentUser);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />; // ✨ Cái này để render các Route con bên trong
}

export default AdminRoute;
