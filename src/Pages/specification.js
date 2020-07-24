import React, { useContext } from "react";
// import { store } from "../Services/Store";
// import { Link } from "react-router-dom";
import Gallery from "./gallery";
import images from "../Images/images";

class Specification extends React.Component {
  state = {
    title: "Bruine Kast",
    pics: [images.bruin002, images.bruin001],
    description:
      "Pellentesque et lacus nisi. Curabitur a ligula gravida, fermentum neque non, gravida ligula. Proin sem purus, volutpat ut metus ultricies, vestibulum volutpat metus. Nullam velit diam, pharetra non enim laoreet, dignissim imperdiet turpis. Nullam non metus eget leo lacinia tincidunt et sed enim. Maecenas elementum, lectus ac aliquam tincidunt, dolor enim egestas tortor, eget posuere sem lorem vel ex. Donec tristique condimentum lorem eu mattis. Duis rutrum risus a velit finibus, a euismod diam ultrices. Phasellus fermentum dictum felis, id vehicula elit blandit et. Morbi posuere felis vel sem iaculis malesuada. Aliquam a purus non dui egestas vehicula. Vivamus sit amet euismod lectus. Integer sodales maximus ante sed posuere. Sed consectetur elit bibendum nibh ullamcorper dictum.",
    price: "150",
    shopify: "https://www.google.com",
    marktplaats: "https://www.google.com",
  };

  //   const userData = useContext(store);
  //   const {
  //     pics,
  //     title,
  //     description,
  //     price,
  //     shopify,
  //     marktplaats,
  //   } = userData.state.current;
  render() {
    const {
      title,
      pics,
      description,
      price,
      marktplaats,
      shopify,
    } = this.state;
    return (
      <div className="specification">
        <div className="title-spec">
          <h1>{title}</h1>
        </div>
        <div className="product-spec">
          <Gallery picture={pics} />
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
  }
}

export default Specification;
