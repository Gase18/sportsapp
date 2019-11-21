import React from "react";
export function AppStandings(props){
    let content =<div></div>

    if(props.sData) {
        const tableElements = props.sData.map(newData => <tr>
          
            {/* <td>{newData.id}</td>
            <td>{newData.blue_team}</td>
            <td>{newData.total_points}</td> */}
            

        </tr>)
        content = tableElements
    }
    return <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Team</th>
                <th>Total Points</th>
            </tr>
            <tr>
                <td>3</td>
                <td>Splyce</td>
                <td>9</td>
            </tr>
            <tr>
                <td>1</td>
                <td>G2 Esports</td>
                <td>7</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Fnatic</td>
                <td>5</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Vitality</td>
                <td>5</td>
            </tr>
  
            
        </thead>
        <tbody>
            {content}
        </tbody>
    </table>
}