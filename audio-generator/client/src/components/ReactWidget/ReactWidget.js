import Player from "react-soundcloud-widget-player";
import ReactDOM, { render } from "react-dom";
import React, {Component} from "react";

export function ReactWidget(){

            return (
                <div>
                    <Player
                    title="TestPlayer"
                    audioUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/932739898"
                    ></Player>
                </div>
            )
        }


export default ReactWidget;