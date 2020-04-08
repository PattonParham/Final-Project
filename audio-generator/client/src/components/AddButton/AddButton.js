import React from "react";
import "./AddButton.css";

function AddBtn(props){
    return(
        <button className = "add-btn" {...props}>
            Add Audio
        </button>
    );
}

export default AddBtn; 