import React, { useContext } from "react";
import { HashRouter, Route } from "react-router-dom";
import { withFirebase } from "./Firebase";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/home";
import Input from "./Pages/input";
import AddPicture from "./Components/AddPicture/addpicture";
// import Help from "./Pages/help";
import Shop from "./Pages/shop";
// import About from "./Pages/about";
import SignInPage from "./Pages/login";
import Specification from "./Pages/specification";
import "./Styles/import.scss";
import { StateProvider } from "./Services/Store";

class App extends React.Component {
  render() {
    return (
      <StateProvider>
        <div className="App">
          <HashRouter basename="/">
            <Navbar />
            <Route exact path="/" component={Home} />
            {/* <Route path="/help" component={Help} /> */}
            {/* <Route path="/about" component={About} /> */}
            <Route path="/shop" component={Shop} />
            <Route path="/login" component={SignInPage} />
            <Route path="/spec" component={Specification} />
            <Route path="/input" component={Input} />
          </HashRouter>
        </div>
      </StateProvider>
    );
  }
}

export default withFirebase(App);
