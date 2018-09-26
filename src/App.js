import React, { Component } from 'react';
import "./App.css";
import WelcomeMenu from "../src/components/WelcomeMenu";
import {BrowserRouter as Router, Route} from "react-router-dom";
import WelcomeHome from "./components/WelcomeMenu";
import WelcomeNews from "./components/WelcomeNews";
import WelcomeAbout from "./components/WelcomeAbout";
import WelcomeContact from "./components/WelcomeContact";
import WelcomeToS from "./components/WelcomeToS";
import WelcomePP from "./components/WelcomePP";

class App extends Component {
  render() {
    return (
      <div id="divBody">
          <div id="divHeader">
              <div id="divHeaderText">@ by Logo 2018 - 2018</div>
              <div id="divHeaderText">Facebook Twitter Instagram</div>
          </div>
          <div id="divMain">
              <Router>
                  <div id="divLinks">
                      <Route path="/home" component={WelcomeHome}/>
                      <Route path="/news" component={WelcomeNews}/>
                      <Route path="/about" component={WelcomeAbout}/>
                      <Route path="/contact" component={WelcomeContact}/>
                      <Route path="/tos" component={WelcomeToS}/>
                      <Route path="/pp" component={WelcomePP}/>
                  </div>
              </Router>
          </div>
      </div>
    );
  }
}

export default App;
