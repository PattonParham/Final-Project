import React from "react";
import "./generateButton.css";

function GenerateBtn(props){
    return(
        <button className = "generate-btn" {...props} role = "button">
            Generate Audio
        </button>
    );
}

export default GenerateBtn; 