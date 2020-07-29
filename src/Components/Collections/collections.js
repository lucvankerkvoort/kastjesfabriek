import React from "react";
import CollectionItem from "./collection-item";
import images from "../../Images/images";

const Collection = () => {
  return (
    <div className="collection">
      <CollectionItem title="Thee Kastjes" picture={images.donkerGroen001} />
      <CollectionItem title="Buikkastjes" picture={images.armyGreen001} />
      <CollectionItem title="Sidetables" picture={images.verfRose001} />
    </div>
  );
};

export default Collection;
