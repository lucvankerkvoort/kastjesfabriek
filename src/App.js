import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { withFirebase } from "./Firebase";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/home";
// import Help from "./Pages/help";
import Shop from "./Pages/shop";
// import About from "./Pages/about";
import SignInPage from "./Pages/login";
import SignUpPage from "./Pages/signup";
import Specification from "./Pages/specification";
import "./Styles/import.scss";

class App extends React.Component {
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? localStorage.setItem("authUser", authUser)
        : localStorage.setItem("authUser", null);
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <Navbar />
          <Route exact path="/" component={Home} />
          {/* <Route path="/help" component={Help} /> */}
          {/* <Route path="/about" component={About} /> */}
          <Route path="/shop" component={Shop} />
          <Route path="/login" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/spec" component={Specification} />
        </HashRouter>
      </div>
    );
  }
}

export default withFirebase(App);
