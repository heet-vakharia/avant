import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.scss";

const Navbar = ({ isUserLogIn, setIsUserLogin, user }) => {
  return (
    <nav className="nav">
      {isUserLogIn ? (
        <Link to="/" className="nav-item">
          <li>Home</li>
        </Link>
      ) : null}
      {isUserLogIn ? null : (
        <Link to="/register" className="nav-item">
          <li> Register</li>
        </Link>
      )}

      <Link to="/" className="nav-item">
        <li onClick={() => setIsUserLogin(false)}>
          {isUserLogIn ? "Sign Out" : "Sign In"}
        </li>
      </Link>

      {isUserLogIn ? (
        <Link to="/cart" className="nav-item">
          <li> {user.name || "User"} </li>
        </Link>
      ) : null}
    </nav>
  );
};

export default Navbar;
