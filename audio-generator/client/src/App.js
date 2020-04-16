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
let [fade, setFade] = useState(null);



const [formObject, setFormObject] = useState({
    inputOne: "",
    inputTwo: "",
    inputThree: "",
    inputFour: "",
    titleOne: "",
    titleTwo: "",
    titleThree: "",
    titleFour: "",
    urlOne: "",
    urlTwo: "",
    urlThree: "",
    urlFour: ""

})
function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };
  const addAudio = () => {

  }


    const generateAudio = (event) => {
        //function PBs (Play Boolean) to play the audio files
       function PB(){
       
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
     function handleFade(){
        if (fade = null){
          
            setTimeout(setFade(.9), 1)
            setTimeout(setFade(.8), 2)
            setTimeout(setFade(.7), 3)
            setTimeout(setFade(.6), 4)
            setTimeout(setFade(.5), 5)
            setTimeout(setFade(.4), 6)
            setTimeout(setFade(.3), 7)
            setTimeout(setFade(.2), 8)
            setTimeout(setFade(.1), 9)
            setTimeout(setFade(0), 10)
        } else if (fade = 0 ){
            setTimeout(setFade(.1), 1)
            setTimeout(setFade(.2), 2)
            setTimeout(setFade(.3), 3)
            setTimeout(setFade(.4), 4)
            setTimeout(setFade(.5), 5)
            setTimeout(setFade(.6), 6)
            setTimeout(setFade(.7), 7)
            setTimeout(setFade(.8), 8)
            setTimeout(setFade(.9), 9)
            setTimeout(setFade(null), 10)
        }

        // if (fade = null){
        //     setFade(.3)
        // } else if (fade = .3) {
        //     setTimeout(setFade(null),)
        // }
     }

    
    PB();

    let wait = parseInt(formObject.inputOne);
    console.log(wait);
    let waitII = parseInt(formObject.inputTwo);
    let waitIII = parseInt(formObject.inputThree);
    let waitIV = parseInt(formObject.inputFour);

    // const wait = 10000;
    // const waitII = 4000;
    // const waitIII = 6000;
    // const waitIV = 4000;
    setTimeout(handleFade, (wait - 10));
    setTimeout(PBII, wait);
    setTimeout(handleFade, ((wait + waitII) - 10));
    setTimeout(PBIII,(wait + waitII));
    setTimeout(handleFade, ((wait+waitII+waitIII) - 10));
    setTimeout(PBIV, (wait+waitII+waitIII));
    setTimeout(handleFade, ((wait+waitII+waitIII+waitIV) - 10));
    setTimeout(StopAll, (wait+waitII+waitIII+waitIV));  
          
    }


    return(
        <div id = "bodyDiv">
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
             <Row>
                <ReactPlayer id ="playerone" className="player" height ="100px" volume = {fade} playing={playingBool ? true : false} title={formObject.titleOne} url={formObject.urlOne}>
                </ReactPlayer>

            </Row>
            <Row>
            <div className="titleurlinput">
                <Row>
                <Col size="lg">
                <input onChange={handleInputChange} className="titleinput" name="titleOne" value ={formObject.titleOne}></input>
                </Col>
                <Col size="lg">
                <input onChange={handleInputChange} className="urlinput" name="urlOne" value={formObject.urlOne}></input>
                </Col>
              <AddBtn id ="AddOne"></AddBtn>
              </Row>
            </div>
            </Row>
            <Row>
                <ReactPlayer id ="playertwo" className="player" height ="100px" volume = {fade} playing={playingBoolII ? true : false} title={formObject.titleTwo} url={formObject.urlTwo}>
                </ReactPlayer>
            </Row>
            <Row>
            <div className="titleurlinput">
                <Row>
                <Col size="lg">
                <input onChange={handleInputChange} className="titleinput" name="titleTwo" value ={formObject.titleTwo}></input>
                </Col>
                <Col size="lg">
                <input onChange={handleInputChange} className="urlinput" name="urlTwo" value ={formObject.urlTwo}></input>
                </Col>
              <AddBtn onClick={addAudio}></AddBtn>
              </Row>
            </div>
            </Row>
            <Row>
                <ReactPlayer id ="playerthree" className="player" height ="100px" volume = {fade} playing={playingBoolIII ? true : false} title={formObject.titleThree} url={formObject.urlThree}>
                </ReactPlayer>
            </Row>
            <Row>
            <div className="titleurlinput">
                <Row>
                <Col size="lg">
                <input onChange={handleInputChange} className="titleinput" name="titleThree" value ={formObject.titleThree}></input>
                </Col>
                <Col size="lg">
                <input onChange={handleInputChange} className="urlinput" name="urlThree" value ={formObject.urlThree}></input>
                </Col>
              <AddBtn></AddBtn>
              </Row>
            </div>
            </Row>
            <Row>
                <ReactPlayer id ="playerfour" className="player" height ="100px" volume = {fade} playing={playingBoolIV ? true : false}title={formObject.titleFour} url={formObject.urlFour}>   
                </ReactPlayer>
            </Row>
            <Row>
            <div className="titleurlinput">
                <Row>
                <Col size="lg">
                <input onChange={handleInputChange} className="titleinput" name="titleFour" value ={formObject.titleFour}></input>
                </Col>
                <Col size="lg">
                <input onChange={handleInputChange} className="urlinput" name="urlFour" value={formObject.urlFour}></input>
                </Col>
              <AddBtn></AddBtn>
              </Row>
            </div>
            </Row>
         </Col>
         <Col size ="sm">
             <Row>
             <input id = "inOne" onChange={handleInputChange} name= "inputOne" value={formObject.inputOne} className="Input"></input>
             </Row>
             <Row>
             <input id = "inTwo" onChange={handleInputChange} name= "inputTwo" value={formObject.inputTwo} className="Input"></input>
             </Row>
             <Row>
             <input id = "inThree" onChange={handleInputChange} name= "inputThree" value={formObject.inputThree} className="Input"></input>
             </Row>
             <Row>
             <input id = "inFour" onChange={handleInputChange} name = "inputFour" value={formObject.inputFour} className="Input"></input>
             </Row>
         </Col>

         
     </Row>
<Row>
        <GenerateBtn onClick= {generateAudio}></GenerateBtn>
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