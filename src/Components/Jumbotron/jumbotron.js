import React from "react";

const Jumbotron = ({ title, backgroundPicture, logo, text }) => {
  return (
    <>
      <div className="jumbotron-content">
        {logo ? (
          <img src={logo} alt="logo" width="100px" height="100px" />
        ) : null}
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div
        className="jumbotron"
        style={{
          background: backgroundPicture ? `url(${backgroundPicture})` : "white",
          backgroundPosition: "center",
        }}
      >
        <div className="layer" />
      </div>
    </>
  );
};

export default Jumbotron;
