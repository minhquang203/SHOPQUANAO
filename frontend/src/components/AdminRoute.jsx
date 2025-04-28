import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function AdminRoute() {
  // Get authentication state from Redux store
  const auth = useSelector((state) => state.auth);
  
  // Check if user is authenticated and has admin role
  const isAdmin = auth?.user && auth?.token && auth?.role === 'admin';

  // If authorized, render the child routes (Outlet)
  // If not, redirect to login page
  return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
}

export default AdminRoute;