import React, { useState } from 'react';
import { FaSearch, FaSignInAlt, FaUser, FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const AuthenticatedIcons = () => (
<div className="relative group">
  <button className="hover:text-gray-600 transition flex items-center space-x-2">
    <FaUser className="h-5 w-5" />
    <span className="hidden md:inline">{user?.username}</span>
  </button>
  <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl z-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      Profile
    </Link>
    <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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

  );

  const NonAuthenticatedIcons = () => (
    <div className="flex items-center space-x-6">
      <button className="hover:text-gray-600 transition">
        <FaSearch className="h-5 w-5 md:hidden" />
      </button>
      <Link to="/login" className="hover:text-gray-600 transition flex items-center space-x-1">
        <FaSignInAlt className="h-5 w-5" />
        <span className="hidden md:inline">Login</span>
      </Link>
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
          <Link to="/" className="text-2xl font-bold">FASHION STORE</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/women" className="hover:text-gray-600 transition">Women</Link>
            <Link to="/men" className="hover:text-gray-600 transition">Men</Link>
            <Link to="/accessories" className="hover:text-gray-600 transition">Accessories</Link>
            <Link to="/sale" className="text-red-600 hover:text-red-700 transition">Sale</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <FaSearch className="absolute left-3 text-gray-400" />
          </div>

          {/* Icons */}
          {user ? <AuthenticatedIcons /> : <NonAuthenticatedIcons />}

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/women" className="hover:text-gray-600 transition px-4">Women</Link>
              <Link to="/men" className="hover:text-gray-600 transition px-4">Men</Link>
              <Link to="/accessories" className="hover:text-gray-600 transition px-4">Accessories</Link>
              <Link to="/sale" className="text-red-600 hover:text-red-700 transition px-4">Sale</Link>
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
