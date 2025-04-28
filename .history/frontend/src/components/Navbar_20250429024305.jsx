import React, { useState } from 'react';
import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaSignInAlt,
  FaUser,
  FaUserPlus,
  FaUserShield // Thêm biểu tượng shield cho admin
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectCurrentRole, selectCurrentUser, selectIsAuthenticated } from '../redux/authSelectors';
import { logout } from '../redux/authSlice';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectCurrentUser);
  const role = useSelector(selectCurrentRole);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const AuthenticatedIcons = () => (
    <div className="flex items-center space-x-6">
      {/* Search Icon (mobile only) */}
      <button className="hover:text-gray-600 transition md:hidden">
        <FaSearch className="h-5 w-5" />
      </button>
      
      {/* Wishlist */}
      <Link to="/wishlist" className="hover:text-gray-600 transition">
        <FaHeart className="h-5 w-5" />
      </Link>
      
      {/* Cart with badge */}
      <Link to="/cart" className="relative hover:text-gray-600 transition">
        <FaShoppingCart className="h-5 w-5" />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
      </Link>
      
      {/* Admin Dashboard Link - Chỉ hiển thị cho admin */}
      {role === 'admin' && (
        <Link 
          to="/admin/dashboard" 
          className="hover:text-purple-600 transition flex items-center space-x-1"
          title="Admin Dashboard"
        >
          <FaUserShield className="h-5 w-5" />
          <span className="hidden md:inline">Admin</span>
        </Link>
      )}
      
      {/* User dropdown */}
      <div className="relative group">
        <button 
          className="hover:text-black transition-transform hover:scale-105 flex items-center"
          aria-label="User menu"
        >
          <FaUser className="h-5 w-5" />
          <span className="hidden md:inline ml-1">{user?.username}</span>
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
      {/* Search Icon (mobile only) */}
      <button className="hover:text-gray-600 transition md:hidden">
        <FaSearch className="h-5 w-5" />
      </button>
      
      {/* Login */}
      <Link to="/login" className="hover:text-gray-600 transition flex items-center space-x-1">
        <FaSignInAlt className="h-5 w-5" />
        <span className="hidden md:inline">Login</span>
      </Link>
      
      {/* Register */}
      <Link to="/register" className="hover:text-gray-600 transition flex items-center space-x-1">
        <FaUserPlus className="h-5 w-5" />
        <span className="hidden md:inline">Register</span>
      </Link>
    </div>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-black">
            FASHION STORE
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/women" className="hover:text-gray-600 transition">Women</Link>
            <Link to="/men" className="hover:text-gray-600 transition">Men</Link>
            <Link to="/accessories" className="hover:text-gray-600 transition">Accessories</Link>
            <Link to="/sale" className="text-red-600 hover:text-red-700 transition">Sale</Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center relative flex-1 max-w-md mx-4">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <FaSearch className="absolute left-3 text-gray-400" />
          </div>

          {/* Icons (Authentication based) */}
          {isAuthenticated ? <AuthenticatedIcons /> : <NonAuthenticatedIcons />}

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/women" 
                className="hover:text-gray-600 transition px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link 
                to="/men" 
                className="hover:text-gray-600 transition px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link 
                to="/accessories" 
                className="hover:text-gray-600 transition px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accessories
              </Link>
              <Link 
                to="/sale" 
                className="text-red-600 hover:text-red-700 transition px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sale
              </Link>
              
              {/* Admin Link - Mobile */}
              {role === 'admin' && (
                <Link 
                  to="/admin/dashboard" 
                  className="hover:text-purple-600 transition px-4 py-2 flex items-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaUserShield />
                  <span>Admin Dashboard</span>
                </Link>
              )}
              
              {/* Mobile Search */}
              <div className="relative px-4">
                <input
                  type="text"
                  placeholder="Search products..."
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