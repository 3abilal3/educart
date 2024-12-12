import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
     

      {/* Navigation Links */}
      <div className="mt-10 ml-48 flex gap-8 text-[8px] font-semibold">
        <Link to="/" className="hover:text-yellow-500">
          HOME
        </Link>
        <Link to="/courses" className="hover:text-yellow-500">
          COURSES
        </Link>
        <Link to="/membership" className="hover:text-yellow-500">
          MEMBERSHIP
        </Link>
        <Link to="/about" className="hover:text-yellow-500">
          ABOUT US
        </Link>
        <Link to="/contact" className="hover:text-yellow-500">
          CONTACT US
        </Link>
        <Link to="/shop" className="hover:text-yellow-500">
          SHOP
        </Link>
         {/* Logo and Icons */}
      <div className="mt-10 ml-80 flex items-center gap-6">
        {/* Heart Icon with Black Outline */}
        <div
          className="relative cursor-pointer hover:text-yellow-500"
        >
         <FaRegHeart/>
        </div>

        {/* Search Icon */}
        <FaSearch/>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
