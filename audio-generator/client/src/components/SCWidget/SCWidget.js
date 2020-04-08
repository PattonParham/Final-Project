import React from "react";
import "./SCWidget.css";
import "./SCscript"

export function SCWidget(){
    

    return (
        <div>
        <iframe   className = "scwidget"  height="166" scrolling="no" frameborder="no" allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/932739898&amp;{ ADD YOUR PARAMETERS HERE }">
</iframe>
</div>
    );
}

export default SCWidget; 