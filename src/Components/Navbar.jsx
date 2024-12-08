import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>

<div className="mt-10 ml-80 flex items-center gap-6">
          <i className="fas fa-heart hover:text-yellow-500 cursor-pointer"></i>
          <i className="fas fa-search hover:text-yellow-500 cursor-pointer"></i>
        </div>
        {/* Navigation Links */}
        <div className="mt-2 ml-36 flex gap-8 text-[10px] font-semibold">
       
          <Link to="/" className="hover:text-yellow-500">HOME</Link>
          <Link to="/courses" className="hover:text-yellow-500">COURSES</Link>
          <Link to="/membership" className="hover:text-yellow-500">MEMBERSHIP</Link>
          <Link to="/about" className="hover:text-yellow-500">ABOUT US</Link>
          <Link to="/contact" className="hover:text-yellow-500">CONTACT US</Link>
          <Link to="/shop" className="hover:text-yellow-500">SHOP</Link>
        </div>

        {/* Icons Section */}
        
    </div>
  )
}

export default Navbar