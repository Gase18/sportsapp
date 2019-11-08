import React from "react";
import{FetchUsers} from "./UserSevices";
import{UserList} from "./UserList";


function Header(props){
    return <header>Mina användare</header>
}
function Footer(props){
    return <footer>@Copyright <a href="glissted@gmail.com">Gabriel</a></footer>
}

export function FetchTest(props){

    const [users, setUsers]=React.useState(undefined);
   async function getData(){
       const data = await FetchUsers();
       setUsers(data);
    }
    console.log(users);

    return <div className="app"> 
    <Header/>
    <button onClick={getData}>hello fetch</button>
    <UserList users={users}/>
    <Footer/>
    
    </div>
}