import React from "react";
import "./Header.styles.scss";
// import imageSmall from "../../assets/header-small.jpg";
import image from "../../assets/header-med.jpg";
const Header = () => {
  return (
    <div
      className="header"
      style={{
        background: `linear-gradient(to bottom, rgba(15, 32, 39,.5),rgba(32, 58, 67,.5),rgba(44, 83, 100,.5)), url(${image}) center`,
      }}
    ></div>
  );
};

export default Header;
