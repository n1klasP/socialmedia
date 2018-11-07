import React, {Component} from 'react';
import "../../css/style.css";
import MenuLinkList from "../forms/MenuLinkList";

const WelcomePP = () => {
    return(
        <div>
            <div id="divLogo">
                <div id="divLogoImage1"></div>
            </div>
            <div>
                <MenuLinkList/>
            </div>
            <div id="divMenuHome">

            </div>
        </div>
    );
}

export default WelcomePP;