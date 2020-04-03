import React from "react";
import "./style.css";

function generateBtn(props){
    return(
        <button className = "generate-btn" {...props} role = "button">
            Generate Audio
        </button>
    )
}

export default generateBtn; 