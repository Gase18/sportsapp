import React from "react";
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import {AppHeader} from "./AppHeader";
import {AppFooter} from "./AppFooter";
import {AppList} from "./AppList";
import{FetchData} from "./AppData";

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
        <div><AppList tData= {newusers}/></div>
        <div><AppFooter/></div>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));


