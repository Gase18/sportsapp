import React from "react";
import './index.css';


export function AppHeader(props){
  
    function onLogin(){
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
		const loginButtn = `Basic ${btoa(username+":"+password)}`;
        props.onLogin(loginButtn);
	}	




    return <div className="AppHeader">
		<li><a href="http://localhost:3000">Home</a></li>

        <label className="uname" htmlFor="username"><b>Username</b></label>
            <input type="text" id="username"></input>
        <label className="psw" htmlFor="password"><b>Password</b></label>
            <input type="password" id="password"></input>
            <button onClick={onLogin}>Login</button>
            </div>
}
