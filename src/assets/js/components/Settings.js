import React, {Component} from 'react';
import "../../css/style.css";

const Profile = () => {
    return(
        <div id="divSettings">
            <div className="settingsItem">
                <div className="settingsItemTitle">Account</div>
                <div className="settingsItemContent">
                    Jeder darf mein Profil ansehen <input type="checkbox"/><br/><br/>
                    Man kann auf meinem Profil Kommentare schreiben <input type="checkbox"/><br/><br/>
                    Man kann mein Profilbild sehen <input type="checkbox"/><br/><br/>
                    Man darf mich adden <input type="checkbox"/><br/><br/>
                </div>
            </div>
            <div className="settingsItem">
                <div className="settingsItemTitle">Privacy</div>
                <div className="settingsItemContent">
                    Ich erlaube es Werbung und Neuigkeiten per E-Mail zu erhalten <input type="checkbox"/><br/><br/>
                    Man darf meine Daten ein dritte weiterverkaufen <input type="checkbox"/><br/><br/>
                </div>
            </div>
            <div className="settingsItem">
                <div className="settingsItemTitle">Extras</div>
                <div className="settingsItemContent">
                    Lege deine Avatar fest <input type="file"/><br/><br/>
                    Lege dein Banner fest <input type="file"/><br/><br/>
                    Lege deine Standardfarbe fest <input type="color"/><br/><br/>
                </div>
            </div>
        </div>
    );
}

export default Profile;