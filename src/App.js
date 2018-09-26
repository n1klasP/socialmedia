import React, { Component } from 'react';
import "./App.css";
import WelcomeMenu from "../src/components/WelcomeMenu";

class App extends Component {
  render() {
    return (
      <div id="divBody">
          <div id="divHeader">
              <div id="divHeaderText">@ by Logo 2018 - 2018</div>
              <div id="divHeaderText">Facebook Twitter Instagram</div>
          </div>
          <div id="divMain">
              <WelcomeMenu/>
          </div>
      </div>
    );
  }
}

export default App;
