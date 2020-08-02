import React, { useEffect, useContext } from "react";
import Jumbotron from "../Components/Jumbotron/jumbotron";
import Images from "../Images/images";
import Title from "../Components/Jumbotron/title";
import Footer from "../Components/Footer/footer";
import Collection from "../Components/Collections/collections";
import FirebaseContext from "../Firebase/Context";
const Home = () => {
  console.log(FirebaseContext);
  return (
    <div className="home">
      <Jumbotron
        title="Kastjes Fabriek"
        backgroundPicture={Images.verfAquaMarine001}
        text="Vind je het ook zo zonde dat er zoveel spullen afgedankt worden? Ik ook! Daarom ben ik begonnen met de Kastjes Fabriek om oude meubels een tweede kans te geven. Met liefde knap ik alles op tot echte pareltjes! Kijk snel wat er allemaal te koop is."
      />
      <Title title="Collecties" />
      <Collection />
      <Footer />
    </div>
  );
};

export default Home;
