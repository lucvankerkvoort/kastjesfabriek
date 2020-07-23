import React, { useContext } from "react";
import { store } from "../Services/Store";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import Gallery from "./gallery";

const Specification = () => {
  const userData = useContext(store);
  const {
    pics,
    title,
    description,
    price,
    shopify,
    marktplaats,
  } = userData.state.current;
  return (
    <div className="specification">
      <div className="title-spec">
        <Link className="back-to-shop" to="/shop">
          Back to shopping
        </Link>
        <h1>{title}</h1>
      </div>
      <div>
        <Gallery picture={pics} />
        <div>
          <p>{description}</p>
          <p>€{price},-</p>
          <link>{marktplaats}</link>
          <link>{shopify}</link>
        </div>
      </div>
    </div>
  );
};

export default Specification;
