import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isUserLogIn, setIsUserLogin }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-items">
        <li>Home</li>
      </Link>
      <Link to="/" className="nav-items">
        <li onClick={() => setIsUserLogin(false)}>
          {isUserLogIn ? "Sign Out" : "Sign In"}
        </li>
      </Link>
      <Link to="/register" className="nav-items">
        <li> Register</li>
      </Link>
      <Link to="/cart" className="nav-items">
        <li> Cart </li>
      </Link>
    </nav>
  );
};

export default Navbar;
