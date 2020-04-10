import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
// import ReactWidget from "./components/ReactWidget/ReactWidget";
import GenerateBtn from "./components/generateButton/generateButton";
import AddBtn from "./components/AddButton/AddButton";
// import SCWidget from "./components/SCWidget/SCWidget";
import Header from "./components/header/header";
import {Col, Row, Container } from "./components/Grid";
import ReactPlayer from "react-player";
import { checkPropTypes } from "prop-types";


const App = props => {
const [playingBool, setPlayingBool] = useState(false);

    const generateAudio = (event) => {
       
       if (playingBool === false){
           setPlayingBool(true);
       } else if (playingBool === true){
           setPlayingBool(false);
       }
       console.log(playingBool);
        // const Player = document.getElementById("testplayer");
        // Player.seekTo(24, "seconds");
    }

    return(
        <div>
     <div>
    <Header></Header>
    </div>

 <Container fluid>
     <Row>
         <Col size="lg">
<ReactPlayer id ="testplayer" playing={playingBool ? true : false} url="https://soundcloud.com/waterchildmusic/boondocks"></ReactPlayer>
         </Col>

         
     </Row>
<Row>
        <GenerateBtn onClick= {generateAudio}></GenerateBtn>
    <AddBtn></AddBtn>
</Row>

 </Container>

        </div>
       
    
        // <Router>
        //     <div>
        //         <Route path="/" component={Main} />
        //     </div>
        // </Router>
    );
}

export default App;