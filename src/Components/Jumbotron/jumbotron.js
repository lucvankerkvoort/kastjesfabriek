import React from "react";
import image from "../../Images/images";

const Jumbotron = ({ title }) => {
  return (
    <div className="jumbotron">
      <img src={image.Logo} alt="logo" width="100px" height="100px" />
      <h1>{title}</h1>
    </div>
  );
};

export default Jumbotron;
