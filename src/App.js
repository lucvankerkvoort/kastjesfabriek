import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/home";
import Help from "./Pages/help";
import Shop from "./Pages/shop";
import About from "./Pages/about";
import "./Styles/import.scss";

const App = (props) => {
  const [showElement, setShowElement] = useState(false);

  const { handleInfo } = props;
  return (
    <div className="App">
      <HashRouter basename="/">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/help" component={Help} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </HashRouter>
    </div>
  );
};

export default App;
