import React from 'react';
import { FaPhone, FaClock, FaMapMarkerAlt,FaUser } from 'react-icons/fa';
import { GoClock } from "react-icons/go";
const Header = () => {
  return (
    <div className="bg-[#002E5B] text-white flex items-center justify-between px-4 p-2 text-[8px] font-sans">
      {/* Left Section */}
      <div className="flex items-center gap-6">
      <div className="flex items-center gap-1">
      <FaPhone/>
          <span>+1 212-226-3126</span>
        </div>
        <div className="flex items-center gap-1 ">
        <FaMapMarkerAlt/>
          <span>Greencoat House, 259 Stafford Road, Birmingham, B11 1QS</span>
        </div>
        <div className="flex items-center gap-1">
        <GoClock/>
          <span>Mon - Sat 8.00 - 18.00</span>
        </div>
        
        
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 cursor-pointer">
        <a href="/login" className="flex items-center gap-1  ">
         <FaUser/> Login
        </a>
        <span>|</span>
        </div>
        <a href="/register" className="flex items-center ">
           Register
        </a>
      </div>
    </div>
  );
};

export default Header;
