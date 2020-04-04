import React from "react";
import "./SCWidget.css";
import "./SCscript"

export function SCWidget(){
    

    return (
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
  src="https://w.soundcloud.com/player/?url={embed api url here}&amp;{ ADD YOUR PARAMETERS HERE }">
</iframe>

    );
}

export default SCWidget; 