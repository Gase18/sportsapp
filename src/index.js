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
import{AppDeleteStats} from "./AppDeleteStats";
import{AppEditStats} from "./AppEditStats";
import{FetchProtectedData} from "./AppData";


function App() {
    const [newusers, setUser] = React.useState(undefined);
    const authString = React.useRef(undefined);
    const [logedin, setlogedin]=React.useState(false);

   
    
    async function getTable(){
        const data = await FetchData();
        setUser(data);
    }
    React.useEffect(() => {getTable()}, [])



    async function onLogin(auth){
        authString.current = auth;
        let getData =false;
        try{
            await FetchProtectedData(auth,"/LecStandings/resources/match", "POST")

        } catch(Fel){

            if(Fel === "Fel användarnamn/lösenord!"){
                setlogedin(false);

            }else{
                setlogedin(true);
                getData = true;
            }

        }

        if(getData === true){
            getTable();
        }
    }
    return (
        <div className="Content">
        <header><AppHeader onLogin={onLogin}/></header>
        <div><AppList tData= {newusers}/></div>
        <div>
            <AppNewStats alertbutton ={logedin}/>
            <AppEditStats alertbutton ={logedin}/>
            <AppDeleteStats alertbutton ={logedin}/>
        </div>
        <div><AppStandings sData= {newusers}/></div>
        <div><AppFooter/></div>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
