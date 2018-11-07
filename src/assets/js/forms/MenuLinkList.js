import React from "react";

const MenuLinkList = () => {

    return(
        <div id="divLinks">
            <a href="/home"><div className="button">Home</div></a>
            <a href="/news"><div className="button">News</div></a>
            <a href="/about"><div className="button">About</div></a>
            <a href="/contact"><div className="button">Contact</div></a>
            <a href="/tos"><div className="button">Terms of Service</div></a>
            <a href="/pp"><div className="button">Privacy Policy</div></a>
        </div>
    );

}

export default MenuLinkList;