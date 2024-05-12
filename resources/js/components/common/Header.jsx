import React, { useState } from 'react';
import { Link , useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const location = useLocation();
  // State variables to manage dropdown menu visibility


  // Define a function to check if the current route matches a specific path
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="bg-white py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
          {/* Logo and Brand Name */}
          <img src="/images/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <div className="text-black text-lg font-bold">Pharmacy Afajr</div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-wrap w-full md:w-auto justify-center md:justify-start">
         <Link to="/" className={`text-gray font-bold hover:text-gray-200 px-4 py-2 ${isActiveRoute('/') && 'active'}`}>Home</Link>
          <Link to="/products" className={`text-gray  font-bold hover:text-gray-200 px-4 py-2 ${isActiveRoute('/products') && 'active'}`}>Products</Link>
          <Link to="/about" className={`text-gray font-bold hover:text-gray-200 px-4 py-2 ${isActiveRoute('/about') && 'active'}`}>About Us</Link>
          <Link to="/contact" className={`text-gray font-bold hover:text-gray-200 px-4 py-2 ${isActiveRoute('/contact') && 'active'}`}>Contact</Link>
        </nav>

        {/* Profile Icon and Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="text-gray-500 text-xl focus:outline-none mr-4"
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
          {showProfileMenu && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
              <Link to="/register" className="block px-4 py-2 hover:bg-gray-100">Register</Link>
              <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
            </div>
          )}
        </div>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="text-gray-500 text-xl focus:outline-none"
          >
            Language
          </button>
          {showLanguageMenu && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
              {/* Add language options here */}
              <button className="block px-4 py-2 hover:bg-gray-100">English</button>
              <button className="block px-4 py-2 hover:bg-gray-100">French</button>
              {/* Add more language options here */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
