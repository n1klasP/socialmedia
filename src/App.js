import React, { Component } from 'react';
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import WelcomeHome from "./assets/js/components/WelcomeMenu";
import WelcomeNews from "./assets/js/components/WelcomeNews";
import WelcomeAbout from "./assets/js/components/WelcomeAbout";
import WelcomeContact from "./assets/js/components/WelcomeContact";
import WelcomeToS from "./assets/js/components/WelcomeToS";
import WelcomePP from "./assets/js/components/WelcomePP";
import LoginPage from "./assets/js/components/LoginPage";
import RegisterPage from "./assets/js/components/RegisterPage";

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
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/register" component={RegisterPage}/>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;