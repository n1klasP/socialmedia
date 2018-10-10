import React, {Component} from 'react';
import "../../css/WelcomeMenu.css";
import MenuLinkList from "../forms/MenuLinkList";

const WelcomeMenu = () => {
        return(
            <div>
                <div id="divLogo">
                    <div id="divLogoImage1"></div>
                </div>
                <div>
                    <MenuLinkList/>
                </div>
                <div id="divMenuHome">
                    <div id="divLogoImage2"></div>
                    <div id="divLoginButtons">
                        <a href="/login"><div className="buttonLogin">Sign In</div></a>
                        <a href="/register"><div className="buttonRegister">Sign Up</div></a>
                    </div>
                </div>
            </div>
        )
}

export default WelcomeMenu;