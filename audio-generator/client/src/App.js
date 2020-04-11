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
import BPMInput from "./components/BPMCalc/BPM";
import "./App.css";
// import { checkPropTypes } from "prop-types";


const App = props => {

const [playingBool, setPlayingBool] = useState(false);
const [playingBoolII, setPlayingBoolII] = useState(false);
const [playingBoolIII, setPlayingBoolIII] = useState(false);
const [playingBoolIV, setPlayingBoolIV] = useState(false);
const [seek, setSeek] = useState(0);
//  let bpm = document.getElementById("BPM").value;
//  let firstAudio = document.getElementById("fullNote");
//  firstAudio = bpm/60;

    const generateAudio = (event) => {
       function PB(){
        if (seek === 0){
            setSeek(23);
        }
       if (playingBool === false){

           setPlayingBool(true);
       } else if (playingBool === true){
           setPlayingBool(false);
       }
       console.log(playingBool);
    }
    function PBII(){
       if(playingBoolII === false){
           setPlayingBoolII(true);
       } else if (playingBoolII === true){
           setPlayingBoolII(false);
       }
       
    }
    function PBIII(){
        if(playingBoolIII === false){
            setPlayingBoolIII(true);
        } else if (playingBoolIII === true){
            setPlayingBoolIII(false);
        }
        
     }
    function PBIV(){
        if(playingBoolIV === false){
            setPlayingBoolIV(true);
        } else if (playingBoolIV === true){
            setPlayingBoolIV(false);
        }
    
        
     }
     function StopAll(){

         if (playingBoolIV === true){
            setPlayingBoolIV(false);
         } else if (playingBoolIV === false){
             setPlayingBoolIV(true);
         }
     }
    PB();
    const wait = 10000;
    const waitII = 4000;
    const waitIII = 6000;
    const waitIV = 6000;
    setTimeout(PBII, wait);
    setTimeout(PBIII,(wait + waitII));
    setTimeout(PBIV, (wait+waitII+waitIII));
    setTimeout(StopAll, (wait+waitII+waitIII+waitIV));  
          
    }

    return(
        <div>
     <div>
         <Row>
         <Col size="lg">
         <Header></Header>
         </Col>
         <Col size="lg">
             <Row>
             
         <BPMInput></BPMInput>
             </Row>

         </Col>
         </Row>

   
    
    </div>

 <Container fluid>
     <Row>
         <Col size="lg">
<ReactPlayer id ="playerone" className="player" height ="100px;" playing={playingBool ? true : false} url="https://soundcloud.com/waterchildmusic/boondocks"></ReactPlayer>
<ReactPlayer id ="playertwo" className="player" height ="100px;" playing={playingBoolII ? true : false} url="https://soundcloud.com/waterchildmusic/it-can-happen"></ReactPlayer>
<ReactPlayer id ="playerthree" className="player" height ="100px;" playing={playingBoolIII ? true : false} url="https://soundcloud.com/waterchildmusic/phlox-1"></ReactPlayer>
<ReactPlayer id ="playerfour" className="player" height ="100px;" playing={playingBoolIV ? true : false} url="https://soundcloud.com/therust/waterchild-smokin-exclusive-premiere"></ReactPlayer>
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