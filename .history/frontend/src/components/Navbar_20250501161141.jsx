// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaSignInAlt,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectCurrentRole,
  selectCurrentUser,
  selectIsAuthenticated,
} from "../redux/authSelectors";
import { logout } from "../redux/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectCurrentUser);
  const role = useSelector(selectCurrentRole);

  // Handle logout and redirect to homepage
  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // Changed from "/login" to "/" for redirecting to homepage
  };

  const AuthenticatedIcons = () => (
    <div className="flex items-center space-x-6">
      <button className="hover:text-gray-600 transition">
        <FaSearch className="h-5 w-5 md:hidden" />
      </button>
      <Link to="/wishlist" className="hover:text-gray-600 transition">
        <FaHeart className="h-5 w-5" />
      </Link>
      <Link to="/cart" className="relative hover:text-gray-600 transition">
        <FaShoppingCart className="h-5 w-5" />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
      </Link>

      {/* Admin Dashboard Link - Only visible for admins */}
      {role === "admin" && (
        <Link to="/admin/dashboard" className="hover:text-gray-600 transition">
          <span className="hidden md:inline">Admin</span>
        </Link>
      )}

      <div className="relative group">
        <button className="hover:text-black transition-transform hover:scale-105">
          <FaUser className="h-5 w-5" />
          <span className="hidden md:inline">{user?.username}</span>
        </button>
        <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Profile
          </Link>
          <Link
            to="/orders"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Orders
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );

  const NonAuthenticatedIcons = () => (
    <div className="flex items-center space-x-6">
      <button className="hover:text-gray-600 transition">
        <FaSearch className="h-5 w-5 md:hidden" />
      </button>
      <Link
        to="/login"
        className="hover:text-gray-600 transition flex items-center space-x-1"
      >
        <FaSignInAlt className="h-5 w-5" />
        <span className="hidden md:inline">Login</span>
      </Link>
      <Link
        to="/register"
        className="hover:text-gray-600 transition flex items-center space-x-1"
      >
        <FaUserPlus className="h-5 w-5" />
        <span className="hidden md:inline">Register</span>
      </Link>
    </div>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold">
            FASHION STORE
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/women"
              className="relative text-gray-700 hover:text-black transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all after:duration-300"
            >
              Women
            </Link>
            <Link
              to="/men"
              className="relative text-gray-700 hover:text-black transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all after:duration-300"
            >
              Men
            </Link>
            <Link
              to="/accessories"
              className="relative text-gray-700 hover:text-black transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all after:duration-300"
            >
              Accessories
            </Link>
            <Link
              to="/sale"
              className="relative text-red-600 hover:text-red-700 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-red-700 hover:after:w-full after:transition-all after:duration-300"
            >
              Sale
            </Link>
          </div>

          <div className="relative w-32 focus-within:w-64 transition-all duration-300 ease-in-out">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {user ? <AuthenticatedIcons /> : <NonAuthenticatedIcons />}

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/women" className="hover:text-gray-600 transition px-4">
                Women
              </Link>
              <Link to="/men" className="hover:text-gray-600 transition px-4">
                Men
              </Link>
              <Link
                to="/accessories"
                className="hover:text-gray-600 transition px-4"
              >
                Accessories
              </Link>
              <Link
                to="/sale"
                className="text-red-600 hover:text-red-700 transition px-4"
              >
                Sale
              </Link>
              {role === "admin" && (
                <Link
                  to="/admin/dashboard"
                  className="hover:text-gray-600 transition px-4"
                >
                  Admin Dashboard
                </Link>
              )}
              <div className="relative px-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                />
                <FaSearch className="absolute left-7 top-3 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;