import React from "react";
import "../node_modules/bulma/css/bulma.css";
import"./index.css";
import ReactDOM from 'react-dom';
import {AppHeader} from "./AppHeader";
import {AppFooter} from "./AppFooter";
import {AppList} from "./AppList";
import {AppStandings} from "./AppStandings";
import{FetchData} from "./AppData";
import{AppNewStats} from "./AppNewStats";



function App() {
    const [newusers, setUser] = React.useState(undefined);
    const authString = React.useRef(undefined);
    const [logedin]=React.useState(false);

    async function FetchProtectedData(authString,url,method){
        const res = await fetch(url, {
            method: method,
            headers: {
                'Authorization': authString
            }
        });

        if(res.status === 401){
            throw "Fel användarnamn/lösenord!"
        }
        const data = await res.json();
        return data;
    }
    
    async function getTable(){
        const data = await FetchData();
        setUser(data);
    }
    React.useEffect(() => {getTable()}, [])



    async function onLogin(auth){
        let logedIn = false;
        authString.current = auth;

        try{
            await FetchProtectedData(auth,"/LecStandings/resources/matches", "POST")

        } catch(Fel){

            if(Fel === "Fel användarnamn/lösenord!"){
                logedIn = false;

            }else{
                logedIn = true;
            }

        }

        if(logedIn === true){
            getTable();
        }
    }
    return (
        <div className="Content">
        <header><AppHeader onLogin={onLogin}/></header>
        <div><AppList tData= {newusers}/></div>
        <div><AppNewStats alertbutton ={logedin}/></div>
        <div><AppStandings sData= {newusers}/></div>
        <div><AppFooter/></div>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
