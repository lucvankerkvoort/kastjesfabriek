import React from "react";

const CollectionItem = ({ title, picture }) => {
  return (
    <div className="collection-item">
      <h5 className="collection-item-title">{title}</h5>
      <div
        className="collection-item-background"
        style={{
          background: picture ? `url(${picture})` : "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default CollectionItem;
