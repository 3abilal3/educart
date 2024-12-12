import React from 'react';
import Header from './Components/Header'; // Adjust the path if needed
import Navbar from "./Components/Navbar";
import Login from './Components/Sign-in';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />

      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/courses" element={<div>Courses Page</div>} />
        <Route path="/membership" element={<div>Membership Page</div>} />
        <Route path="/about" element={<div>About Us Page</div>} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
        <Route path="/shop" element={<div>Shop Page</div>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<div>Register Page</div>} />
      </Routes> 
     </Router> 
    </>
  );
};

export default App;
