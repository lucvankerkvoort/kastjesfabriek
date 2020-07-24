import React from "react";
import { Link } from "react-router-dom";
import image from "../../Images/images";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img src={image.Logo} alt="logo" width="75px" height="75px" />
        </Link>
      </div>
      <div className="navbar-items">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <p> Home </p>
        </Link>
        <Link to="/shop" style={{ textDecoration: "none", color: "black" }}>
          <p> Shop </p>
        </Link>
        {/* <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          <p> About </p>
        </Link>
        <Link to="/help" style={{ textDecoration: "none", color: "black" }}>
          <p> Help </p>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
