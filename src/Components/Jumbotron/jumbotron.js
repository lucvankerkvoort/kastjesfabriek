import React from "react";
import Logo from "../../Logo.png";

const Jumbotron = ({ title }) => {
  return (
    <div className="jumbotron">
      <img src={Logo} alt="logo" width="100px" height="100px" />
      <h1>{title}</h1>
    </div>
  );
};

export default Jumbotron;
