import React from "react";
import ReactDOM from 'react-dom';
import {AppHeader} from "./AppHeader";
import {AppFooter} from "./AppFooter";
import {AppList} from "./AppList";
import{FetchData} from "./AppData";
import GUIState from "./GUIState";


function App() {
    const [newusers, setUser] = React.useState(undefined);
    async function getTable(){
        const data = await FetchData();
        setUser(data);
        console.log(data);
    }

    React.useEffect(() => {getTable()}, [])

    return (
        <div className="Content">
        <header><AppHeader/></header>
        <div><GUIState/></div>
        <div><AppList tData= {newusers}/></div>
        <div><AppFooter/></div>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));


