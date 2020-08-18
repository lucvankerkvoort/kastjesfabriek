import React from "react";
import { Link } from "react-router-dom";
import image from "../../Images/images";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img src={image.Logo} alt="logo" width="75px" height="75px" />
          <p>Kastjes Fabriek</p>
        </Link>
      </div>
      <div className="navbar-items">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <p> Home </p>
        </Link>
        <Link to="/shop" style={{ textDecoration: "none", color: "black" }}>
          <p> Shop </p>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
          <p> Contact </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
