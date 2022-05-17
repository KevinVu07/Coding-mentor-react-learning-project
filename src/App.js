import { Component } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Home from "./components/page/homepage/Homepage";
import Login from "./components/page/login/Login";
import Demo from "./components/ui/demo/Demo";
import DemoFunctionalComponent from "./components/ui/demo/DemoFunctionalComponent";
import DemoClassComponent from "./components/ui/demo/DemoClassComponent";

library.add(
  fab,
  faFacebook,
  faInstagram,
  faBell,
  faCircleQuestion,
  faGlobe,
  faMagnifyingGlass,
  faCartShopping,
  faSyncAlt
);

class App extends Component {
  // const [loggedIn, setLoggedIn] = useState();

  loginHandler = (loggedIn) => {
    localStorage.setItem("isLoggedIn", "1");
    this.setState({
      loggedIn: true,
    });
  };

  logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    this.setState({
      loggedIn: false,
    });
  };

  // useEffect(() => {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      name: "",
    };
  }

  componentDidMount() {
    console.log("app.js");
    const storedUserLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedIn === "1") {
      // setLoggedIn(1);
      this.setState({
        loggedIn: true,
      });
    } else {
      this.setState({
        loggedIn: false,
      });
    }
  }

  toggleLoggedIn = () => {
    // setLoggedIn((prev) => !prev);
  };
  render() {
    return (
      <>
        <div>
          {this.state.loggedIn ? (
            <Home logoutHeaderBroastCast={this.logoutHandler.bind(this)} />
          ) : (
            <Login loggedInBroadcast={this.loginHandler.bind(this)} />
          )}
          {/* <DemoFunctionalComponent></DemoFunctionalComponent>
          <DemoClassComponent></DemoClassComponent> */}
        </div>
      </>
    );
  }
}

export default App;
