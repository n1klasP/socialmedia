import React, { Component } from 'react';
import "./App.css";
import "./assets/css/media.css";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import WelcomeHome from "./assets/js/components/WelcomeMenu";
import WelcomeNews from "./assets/js/components/WelcomeNews";
import WelcomeAbout from "./assets/js/components/WelcomeAbout";
import WelcomeContact from "./assets/js/components/WelcomeContact";
import WelcomeToS from "./assets/js/components/WelcomeToS";
import WelcomePP from "./assets/js/components/WelcomePP";
import LoginPage from "./assets/js/components/LoginPage";
import RegisterPage from "./assets/js/components/RegisterPage";
import Dashboard from "./assets/js/components/Dashboard";
import Profile from "./assets/js/components/Profile";
import Settings from "./assets/js/components/Settings";
import IconDashboard from "../src/assets/images/Dashboard.svg";
import IconProfile from "../src/assets/images/Profile.svg";
import IconSettings from "../src/assets/images/Settings.svg";
import IconLogout from "../src/assets/images/Logout.svg";
import axios from 'axios';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            isLoggedIn: true
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
            console.log(res);
        })
    }

    render() {
        if(this.state.isLoggedIn == true){
            return (
                <div id="divBody">
                    <div id="divHeader">
                        <a href="/dashboard"><div className="buttonHeader"><div className="imageHeader" style={{backgroundImage: 'url(' + IconDashboard + ')'}}></div></div></a>
                        <a href="/profile"><div className="buttonHeader"><div className="imageHeader" style={{backgroundImage: 'url(' + IconProfile + ')'}}></div></div></a>
                        <a href="/settings"><div className="buttonHeader"><div className="imageHeader" style={{backgroundImage: 'url(' + IconSettings + ')'}}></div></div></a>
                        <a href="/logout"><div className="buttonHeader"><div className="imageHeader" style={{backgroundImage: 'url(' + IconLogout + ')'}}></div></div></a>
                    </div>
                    <div id="divMain">
                        <Router>
                            <div id="divLinksLoggedIn">
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route path="/profile" component={Profile}/>
                                <Route path="/settings" component={Settings}/>
                            </div>
                        </Router>
                    </div>
                </div>
            );
        } else {
            return (

            <div id="divBody">
                    <div id="divHeader">
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
}

export default App;