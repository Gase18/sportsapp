import React from "react";
export function AppList(props){
    let content =<div></div>

 

    if(props.tData) {
        const tableElements = props.tData.map(newData => <tr>
            <td>{newData.id}</td>
            <td>{newData.blue_team}</td>
            <td>{newData.red_team}</td>
            <td>{newData.blue_points}</td>
            <td>{newData.red_points}</td>
        </tr>)
        content = tableElements
    }
    return <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Blue_Team</th>
                <th>Red_Team</th>
                <th>Blue_Points</th>
                <th>Red_Points</th>
            </tr>
        </thead>
        <tbody>
            {content}
        </tbody>
    </table>
}