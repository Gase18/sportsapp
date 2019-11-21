import React from "react";

export function NavBar(props){
    function onLinkClicked(id){
        // console.log(`Link ${id} was clicked`);
        props.onNavigate(id);
    }

    return (
        <nav>
            <span onClick={() => onLinkClicked(1)}><a href="http://localhost:3000">Sida 1</a></span>
            <span onClick={() => onLinkClicked(2)}>sida 2</span>
            <span onClick={() => onLinkClicked(3)}>sida 3</span>
        </nav>
    )
}

function Lista(props){
    return (
        <ul>
            <li>Konnichiwa</li>
            <li>Hello</li>
            <li>Hej</li>
        </ul>
    )
}



export default function GUIState(props){
   const [currentPage, setCurrentPage] =React.useState(1);
   
   
    function navigate(id){
        console.log(`Navigate: ${id}`);
        setCurrentPage(id);
    }

    let currentContent = null;


    if(currentPage === 1 )
        currentContent = `Välkommen till: Sida ${currentPage}`;

    else if(currentPage === 2)
    currentContent= <ul>
            <button>Knapp på sida 2</button>
        </ul>

    else 
        currentContent = <Lista/>;



    return (
     <div>
         <NavBar onNavigate={navigate} />
         <div className="guistate-content">
             {currentContent}
         </div>
     </div>

    )
}