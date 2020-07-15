import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/home";
import "./Styles/import.scss";

const App = (props) => {
  const [showElement, setShowElement] = useState(false);

  const { handleInfo } = props;
  return (
    <div className="App">
      <HashRouter basename="/">
        <Navbar />
        <Route exact path="/" component={Home} />
      </HashRouter>
    </div>
  );
};

export default App;
