import React, { useContext, useEffect, useState } from "react";
import Items from "../Components/Items/item";
import Title from "../Components/Jumbotron/title";
import Footer from "../Components/Footer/footer";
import { store } from "../Services/Store";
import { db } from "../Firebase/Firebase";

const Shop = () => {
  const [state, setState] = useState("");
  const userData = useContext(store);
  const arr = [];
  useEffect(() => {
    db.collection("items")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          arr.push(doc.data());
          setState(arr);
        });
      });
  }, []);

  return (
    <>
      <Title title="Producten" />
      <div className="shop">
        {(state || []).map((item) => (
          <Items
            title={item.title}
            description={item.description}
            pics={item.images}
            price={item.price}
          />
        ))}
        {/* <Items
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
        /> */}
      </div>
      <Footer />
    </>
  );
};

export default Shop;
