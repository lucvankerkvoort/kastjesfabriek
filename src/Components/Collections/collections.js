import React, { useContext, useState, useEffect } from "react";
import CollectionItem from "./collection-item";
import images from "../../Images/images";

const Collection = ({ title, collections }) => {
  console.log(title);
  console.log(collections);
  const images = () => {
    const arr = [];
    for (let i = 0; i < title.length; i++) {
      collections
        .filter((item) => item.type === title[i])
        .map((item) => arr.push(...item.images));
    }
    return arr;
  };
  console.log(images());
  return (
    <div className="collection">
      {title.map((title) => (
        <CollectionItem title={title} picture={images()} />
      ))}
      {/* <CollectionItem title="Thee Kastjes" picture={images.donkerGroen001} />
      <CollectionItem title="Buikkastjes" picture={images.armyGreen001} />
      <CollectionItem title="Sidetables" picture={images.verfRose001} /> */}
    </div>
  );
};

export default Collection;
