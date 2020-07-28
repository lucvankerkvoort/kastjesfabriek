import React, { useContext, useEffect } from "react";
import Items from "../Components/Items/item";
import images from "../Images/images";
import Title from "../Components/Jumbotron/title";
import Footer from "../Components/Footer/footer";

const Shop = () => {
  return (
    <>
      <Title title="Producten" />
      <div className="shop">
        <Items
          title="Antraciet Grijze Kast"
          price="150"
          sold={true}
          pics={[images.antracietGrijs001, images.antracietGrijs002]}
        />
        <Items
          title="Bruine Kast"
          price="150"
          sold={true}
          pics={[images.bruin001, images.bruin002]}
        />
        <Items
          title="Donker Groene Kast"
          price="150"
          sold={false}
          pics={[images.donkerGroen001]}
        />
        <Items
          title="Army Green Kast"
          price="150"
          sold={false}
          pics={[
            images.armyGreen001,
            images.armyGreen002,
            images.armyGreen003,
            images.armyGreen004,
          ]}
        />
      </div>
      <Footer />
    </>
  );
};

export default Shop;
