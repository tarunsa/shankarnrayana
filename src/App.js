import React from "react";
import Login from "./Components/Screens/Login";
import Signup from "./Components/Screens/Signup";
import Meetings from "./Components/Screens/Meetings";
import Complaints from "./Components/Screens/Complaints";
import Navbar from "./Components/Nav/Navbar";
import HomeScreen from "./Components/HomeScreen";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/Screens/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/home" component={HomeScreen} />
        <Route path="/about" component={About} />
        <Route path="/complaint" component={Complaints} />
        <Route path="/meeting" component={Meetings} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={HomeScreen} />
      </Router>
    </div>
  );
}

export default App;
