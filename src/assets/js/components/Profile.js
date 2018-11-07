import React, {Component} from 'react';
import "../../css/style.css";
import PostetItem from "../forms/PostetItem";

const Profile = () => {
    return(
        <div id="divProfile">
            <div id="profileBanner">
                <div id="profileAvatar"></div>
                <div id="profileName">Thomas Patros</div>
            </div>
            <div id="profileInfo">
                <div id="profileLastName" className="profileInfoItem">Nachname: Patros</div>
                <div id="profileFirstName" className="profileInfoItem">Vorname: Thomas</div>
                <div id="profileBirthday" className="profileInfoItem">Geburtstag: 20.05.1998</div>
                <div id="profileCountry" className="profileInfoItem">Land: Deutschland</div>
            </div>
            <div id="profileLastPosts">
                <PostetItem postText="Heute habe ich in meinem Projekt eine 1 bekommen und die Mathearbeit ist auch gut ausgefallen! :D"/>
                <PostetItem postText="Treffe mich heute mit Freunden. :P"/>
                <PostetItem postText="Ich habe nichts zu tun. Will jemand was zocken?"/>
                <PostetItem postText="Hallooooo?"/>
                <PostetItem postText="Ach warte, ich habe keine Freunde. :c"/>
            </div>
        </div>
    );
}

export default Profile;