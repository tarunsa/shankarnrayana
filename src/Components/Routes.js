import React, { Component } from "react";
// import { Carousel } from "react-responsive-carousel";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Meetings from "./Screens/Meetings";
import About from "./Screens/About";
import Complaints from "./Screens/Complaints";
import Navbar from "./Nav/Navbar";
import HomeScreen from "./HomeScreen";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import "../Styles/HomeScreen.css";

export const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route path="/home" exact component={HomeScreen} />

        <Route path="/about" component={About} />
        <Route path="/meeting" component={Meetings} />
        <Route path="/login" component={Login} />
        <Route path="/complaint" component={Complaints} />
      </Switch>
    </Router>
  );
};
export default Routes;
