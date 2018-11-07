import React, {Component} from 'react';
import "../../css/style.css";

const WelcomeToS = () => {
    return(
        <div id="divLogin">
            <form method="post" class="form">
                <br/>
                <br/>
                <br/>
                <input type='text' name='username' className="input" placeholder='name'/> <br/><br/>
                <input type='text' name='password' className="input" placeholder='password'/> <br/><br/>
                <input type='submit' value='submit' className="input"/> <br/>
            </form>
        </div>
    );
}

export default WelcomeToS;