import React from 'react';
import { FaPhoneAlt, FaClock, FaMapMarkerAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-primary text-white flex items-center justify-between px-4 p-2 text-[8px] font-sans">
      {/* Left Section */}
      <div className="flex items-center gap-6">
      <div className="flex items-center gap-1">
      <i className="fas fa-phone-alt"></i>
          <span>+1 212-226-3126</span>
        </div>
        <div className="flex items-center gap-1 ">
        <i className="fas fa-map-marker-alt"></i>
          <span>1010 Moon Ave, New York, NY US</span>
        </div>
        <div className="flex items-center gap-1">
        <i className="fas fa-clock"></i>
          <span>Mon - Sat 8.00 - 18.00</span>
        </div>
        
        
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 cursor-pointer">
        <a href="/login" className="flex items-center gap-1 hover:underline">
          <i className="fas fa-user"></i> Login
        </a>
        <span>|</span>
        </div>
        <a href="/register" className="flex items-center hover:underline">
           Register
        </a>
      </div>
    </div>
  );
};

export default Header;
