import React from "react";
import './index.css';
export function AppHeader(props){
    return <div className="AppHeader">
        <li><a href="http://localhost:3000">Home</a></li>

	    <label className="uname" htmlFor="uname"><b>Username</b></label>
	    <input type="text" placeholder="Enter Username" name="uname" required></input>
		
		<label className="psw" htmlFor="psw"><b>Password</b></label>
		<input type="password" placeholder="Enter Password" name="psw" required></input>

		<button id ="login" type="submit">Login</button>  
		
		              
	</div>    
	
	
}