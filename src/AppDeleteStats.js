import React from "react";
import {DeleteData} from "./AppData";

export function AppDeleteStats(props){
    const [ShowModal, setShowModal] = React.useState(false); 


    function OnRemove(){
        if(props.alertbutton === true){
            setShowModal(true);
        } 
    }

    function closeModal(){
        setShowModal(false);
    }

    function DeleteTeam(){
        if(props.alertbutton === true){
            let id = document.getElementById("deleteid").value;
            DeleteData(id);
        }
    }
    
    let modalClass = "modal";
    if(ShowModal === true){
        modalClass = "modal is-active";
    }

    return <div className="Container">
                <button id="DeleteBtn" type="button" onClick={OnRemove}>Delete!</button>

                <div className={modalClass}>

                    <div className="modal-background"></div>

                    <div className="modal-content">
                        <input className="input" id="deleteid" type="text" placeholder="id"/>
                        <button type="reset" id="Uppdate" onClick={DeleteTeam}>Delete</button>
                    </div>

                    <button className="modal-close is-large" onClick={closeModal} aria-label="close">modal</button>
                </div>
        </div>

}