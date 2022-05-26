import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faCircleQuestion,
  faGlobe,
  faMagnifyingGlass,
  faCartShopping,
  faSyncAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Home from "./components/page/homepage/Homepage";
import Login from "./components/page/login/Login";
import DemoFunctionalComponent from "./components/ui/demo/DemoFunctionalComponent";
import DemoClassComponent from "./components/ui/demo/DemoClassComponent";
import { Component } from "react";

library.add(
  fab,
  faFacebook,
  faInstagram,
  faBell,
  faCircleQuestion,
  faGlobe,
  faMagnifyingGlass,
  faCartShopping,
  faSyncAlt,
  faStar
);

class App extends Component {
  // const [loggedIn, setLoggedIn] = useState();
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    this.setState({
      loggedIn: true,
    });
  };

  componentDidMount() {
    console.log("app.js");
    const storedUserLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedIn === "1") {
      this.setState({
        loggedIn: true,
      });
    } else {
      this.setState({
        loggedIn: false,
      });
    }
  }

  // useEffect(() => {
  //     const storedUserLoggedIn = localStorage.getItem("isLoggedIn");
  //     if (storedUserLoggedIn === "1") {
  //         setLoggedIn(1);
  //     }
  // }, []);

  render() {
    return (
      <>
        {this.state.loggedIn ? (
          <Home />
        ) : (
          <Login loggedInBroadcast={this.loginHandler.bind(this)} />
        )}
        {/* <DemoFunctionalComponent /> */}
        {/* <DemoClassComponent email="nguyenhuuluan@gmail.com"/> */}
      </>
    );
  }
}

export default App;
