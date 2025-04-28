import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/admin/Dashboard";
import Orders from "./pages/admin/Orders";
import Products from "./pages/admin/Products";
import Users from "./pages/admin/Users";
import Homepage from "./pages/Homepage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Route Admin */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="products" element={<Products />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
