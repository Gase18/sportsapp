import React from "react";

export function AppNewStats(props){
    let modalClass = "modal";
    const [ShowModal, setShowModal] = React.useState(false); 

    function OnAddRemove(){
        if(props.alertbutton === true){
            setShowModal(true);
        } 
    }

    function closeModal(){
        setShowModal(false);
    }

    if(ShowModal === true){
        modalClass = "modal is-active";
    }

    return <div className="Container">
                <button type="button" id="addBtn" onClick={OnAddRemove}>Add new match!</button>


                <div className={modalClass}>
                <div className="modal-background"></div>
                <div className="modal-content">


                    <input className="input" type="text" placeholder="Blue_Team"/>
                    <input className="input" type="text" placeholder="Red_Team"/>
                    <input className="input" type="text" placeholder="Blue_Points"/>
                    <input className="input" type="text" placeholder="Red_Points"/>
                    <button type="reset" id="Uppdate" onClick={closeModal}>Uppdate</button>
                </div>
                    <button className="modal-close is-large" onClick={closeModal} aria-label="close">modal</button>
                </div>
        </div>

}