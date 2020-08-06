import React from "react";

const CollectionItem = ({ title, picture }) => {
  let toArray = [...title];
  const uppercase = toArray.shift();
  const titel = uppercase.toUpperCase() + toArray.join("");
  return (
    <div className="collection-item">
      <h5 className="collection-item-title">{titel}</h5>
      <div
        className="collection-item-background"
        style={{
          background: picture ? `url(${picture[0]})` : "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="collection-layer" />
      </div>
    </div>
  );
};

export default CollectionItem;
