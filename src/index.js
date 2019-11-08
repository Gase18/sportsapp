import React from "react";
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import {FetchTest} from "./FetchTest";
import {AppHeader} from "./AppHeader";
import {AppFooter} from "./AppFooter";

function App() {
    const [newusers, setUser] = React.useState(undefined);
    async function getTable(){
        const users = await FetchTest();
        setUser(users);
        console.log(users);
    }
    return (
        <div className="Content">
        <header><AppHeader/></header>
        <div><AppFooter/></div>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));


