import React, {Component} from 'react';
import "../css/WelcomeMenu.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WelcomeHome from "./WelcomeMenu";
import WelcomeNews from "./WelcomeNews";
import WelcomeAbout from "./WelcomeAbout";
import WelcomeContact from "./WelcomeContact";
import WelcomeToS from "./WelcomeToS";

class WelcomePP extends Component {
    render(){
        return(
            <div>
                <div id="divLogo">
                    <div id="divLogoImage1"></div>
                </div>
                <div>
                    <Router>
                        <div id="divLinks">
                            <Link to="/"><div className="button">Home</div></Link>
                            <Link to="/news"><div className="button">News</div></Link>
                            <Link to="/about"><div className="button">About</div></Link>
                            <Link to="/contact"><div className="button">Contact</div></Link>
                            <Link to="/tos"><div className="button">ToS</div></Link>
                            <Link to="/pp"><div className="button">PP</div></Link>
                            <Route path="/" component={WelcomeHome} />
                            <Route path="/news" component={WelcomeNews} />
                            <Route path="/about" component={WelcomeAbout} />
                            <Route path="/contact" component={WelcomeContact} />
                            <Route path="/tos" component={WelcomeToS} />
                        </div>
                    </Router>
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
}

export default WelcomePP;