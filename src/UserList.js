import React from "react";
export function UserList(props){
    console.log("User List: ", props.users);
    let content = <div>Inga användare laddade</div>
    if(props.users){
        const userElements = props.users.map(user => <li key = {user.id}>{user.name}</li>)
        content = <ul>
            {userElements}
        </ul>
    }
    return content;
}