import React from "react";
import {PostData, EditData} from "./AppData";

export function AppEditStats(props){
    const [ShowModal, setShowModal] = React.useState(false); 
    const [logedin]=React.useState(false);

    function OnAdd(){
        if(props.alertbutton === false){
            setShowModal(true);
        } 
    }

    function closeModal(){
        setShowModal(false);
    }

    function editTeam(){
        if(logedin === 1){
            const Blue_Team = document.getElementById("Blue_Team").Value;
            const Red_Team = document.getElementById("Red_Team").Value;
            const Blue_points = document.getElementById("Blue_Points").Value;
            const Red_points = document.getElementById("Red_points").Value;
            // PostData(Blue_Team, Red_Team,Number(Blue_points), Number(Red_points));
            const data ={
                id: 0,
                Blue_Team,
                Red_Team,
                Blue_points,
                Red_points
            }

            PostData(data);

            closeModal();
        }
    }
    
    let modalClass = "modal";
    if(ShowModal === true){
        modalClass = "modal is-active";
    }

    return <div className="Container">
                <button id="editBtn" type="button" onClick={OnAdd}>Edit Match</button>

                <div className={modalClass}>

                    <div className="modal-background"></div>

                    <div className="modal-content">
                        <input className="input" id="Blue_Team" type="text" placeholder="Blue_Team"/>
                        <input className="input" id="Red_Team" type="text" placeholder="Red_Team"/>
                        <input className="input" id="Blue_points" type="text" placeholder="Blue_Points"/>
                        <input className="input" id="Red_points" type="text" placeholder="Red_Points"/>
                        <button type="reset" id="Uppdate" onClick={EditData}>Edit</button>
                    </div>

                    <button className="modal-close is-large" onClick={closeModal} aria-label="close">modal</button>
                </div>
        </div>

}