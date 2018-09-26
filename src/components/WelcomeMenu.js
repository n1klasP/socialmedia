import React, {Component} from 'react';
import "../css/WelcomeMenu.css";

class WelcomeMenu extends Component {
    render(){
        return(
            <div>
                <div id="divLogo">
                    <div id="divLogoImage1"></div>
                </div>
                <div id="divLinks">
                    <div className="button">Home</div>
                    <div className="button">Update Log</div>
                    <div className="button">About Us</div>
                    <div className="button">Contact</div>
                    <div className="button">ToS</div>
                    <div className="button">PP</div>
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

export default WelcomeMenu;