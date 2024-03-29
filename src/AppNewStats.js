import React from "react";
import {PostData} from "./AppData";

export function AppNewStats(props){
    const [ShowModal, setShowModal] = React.useState(false); 


    function OnAdd(){
        if(props.alertbutton === true){
            setShowModal(true);
        } 
    }

    function closeModal(){
        setShowModal(false);
    }

    function addNewTeam(){
        console.log("hejsan");
        if(props.alertbutton === true){
            const blue_team = document.getElementById("Blue_Team").value;
            const red_team = document.getElementById("Red_Team").value;
            const blue_points = Number(document.getElementById("Blue_points").value);
            const red_points = Number(document.getElementById("Red_points").value);
            // PostData(Blue_Team, Red_Team,Number(Blue_points), Number(Red_points));
            const data ={
                id: 0,
                blue_team,
                red_team,
                blue_points,
                red_points
            }

            PostData(data);
            closeModal();
            console.log("hej");
        }
    }
    
    let modalClass = "modal";
    if(ShowModal === true){
        modalClass = "modal is-active";
    }

    return <div className="Container">
                <button id="addBtn" type="button" onClick={OnAdd}>Add new match!</button>

                <div className={modalClass}>

                    <div className="modal-background"></div>

                    <div className="modal-content">
                        <input className="input" id="Blue_Team" type="text" placeholder="Blue_Team"/>
                        <input className="input" id="Red_Team" type="text" placeholder="Red_Team"/>
                        <input className="input" id="Blue_points" type="text" placeholder="Blue_Points"/>
                        <input className="input" id="Red_points" type="text" placeholder="Red_Points"/>
                        <button id="Uppdate" onClick={addNewTeam}>Add</button>
                    </div>

                    <button className="modal-close is-large" onClick={closeModal} aria-label="close">modal</button>
                </div>
        </div>

}