import React, { useContext } from "react";
import { store } from "../Services/Store";
import { Link } from "react-router-dom";
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
        <Link className="back-to-shopping" to="/shop">
          <p>terug</p>
        </Link>
        <h1>{title}</h1>
      </div>
      <div className="product-spec">
        <div className="picture-spec">
          <Gallery picture={pics} />
        </div>
        <div className="detail-spec">
          <p>Omschrijving: {description}</p>
          <p>Prijs: €{price},-</p>
          <p>Je kan deze producten kopen via</p>
          <a href={marktplaats}>Marktplaats</a>
          <a href={shopify}>Shopify</a>
        </div>
      </div>
    </div>
  );
};

export default Specification;
