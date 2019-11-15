import React from "react";
import './index.css';


async function FetchProtectedData(authString){
    console.log(authString);
    const res = await fetch("/LecStandings/resources/matches", {
        method: "GET",
        headers: {
            'Authorization': authString
        }
    });
    const data = await res.text();
    return data;
}

export function AppHeader(props){
    const [authString, setAuthString] = React.useState(undefined);

    async function onClick(){
        const newText = await FetchProtectedData(authString);
    }

    function onLogin(){
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        setAuthString(`Basic ${btoa(username+":"+password)}`);
    }

    return <div className="AppHeader">
		<li><a href="http://localhost:3000">Home</a></li>
        <label className="uname" htmlFor="username"><b>Username</b></label>
            <input type="text" id="username"></input>
        <label className="psw" htmlFor="password"><b>Password</b></label>
            <input type="password" id="password"></input>
            <button onClick={onLogin}>Login</button>
            <button onClick={onClick}>Access protected data</button>
            </div>
}
