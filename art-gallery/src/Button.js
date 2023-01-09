import React from "react";
// import App from "./App";

function Button(props){
    return(
        <div>
            <button value={-5} onClick={props.handleIterate}>Way back</button>
            <button value={-1} onClick={props.handleIterate}>Go back</button>
            <button value={1} onClick={props.handleIterate}>Go forward</button>
            <button value={5} onClick={props.handleIterate}>Really forward</button>
        </div> 
    )
}

export default Button;