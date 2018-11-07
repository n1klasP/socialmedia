import React, {Component} from 'react';
import "../../css/style.css";
import PostetItem from "../forms/PostetItem";

const Dashboard = () => {
    return(
        <div id="divPosts">
            <PostetItem postAvatar="<div id='postAvatar'></div>" postUsername="Thomas Partos" postTimestamp="15.06.2000" postText="Bin Heute mit meiner Familie in Spanien! Dort werden wir uns während den Sommerferien eine schöne Zeit machen. Wir haben ein richtig schönes Hotelzimmer bekommen und die Sicht aus dem Fenster ist der Wahnsinn! Ich selber habe nicht so viel hier gemacht, da wir erst gestern angekommen sind. Bis jetzt war ich nur am Pool und meine Eltern haben am Meer ein Spaziergang gemacht. Ich melde mich später wieder. Jetzt wird erstmal gefrühstückt! :)"/>
            <PostetItem postAvatar="<div id='postAvatar'></div>" postUsername="Lena Leris" postTimestamp="23.02.2010" postText="War gerade auf der Party von der Justin mir erzählt hat. Die war echt meeeeeega! Wenn ich das nächste mal dort hin gehe, dann muss Lara mitkommen! <3 #BFF"/>
            <PostetItem postAvatar="<div id='postAvatar'></div>" postUsername="Arnold S." postTimestamp="05.08.2019" postText="I'll be back!"/>
        </div>
    );
}

export default Dashboard;