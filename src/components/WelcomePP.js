import React, {Component} from 'react';
import "../css/WelcomeMenu.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WelcomeHome from "./WelcomeMenu";
import WelcomeNews from "./WelcomeNews";
import WelcomeAbout from "./WelcomeAbout";
import WelcomeContact from "./WelcomeContact";
import WelcomeToS from "./WelcomeToS";

const WelcomePP = () => {
    return(
        <div>
            <div id="divLogo">
                <div id="divLogoImage1"></div>
            </div>
            <div>
                <div id="divLinks">
                    <a href="/home"><div className="button">Home</div></a>
                    <a href="/news"><div className="button">News</div></a>
                    <a href="/about"><div className="button">About</div></a>
                    <a href="/contact"><div className="button">Contact</div></a>
                    <a href="/tos"><div className="button">ToS</div></a>
                    <a href="/pp"><div className="button">PP</div></a>
                </div>
            </div>
            <div id="divMenuHome">
                <div id="divLogoImage2"></div>
                <div id="divLoginButtons">
                    <div className="buttonLogin">Login</div>
                    <div className="buttonRegister">Registrieren</div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePP;