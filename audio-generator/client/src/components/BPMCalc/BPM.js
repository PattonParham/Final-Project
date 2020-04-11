import React, {useState} from "react";
import "./BPM.css";
import {Col, Row, Container} from "../Grid/index";

function BPMInput(){
   
    const [full, setFull] = useState(null);
    const [half, setHalf] = useState(null);
    const [quart, setQuart] = useState(null);
    const [eighth, setEighth] = useState(null);
    const [sixteen, setSixteen] = useState(null);
    const [thirtytwo, setThirtyTwo] = useState(null);
    const [sixtyfour, setSixtyFour] = useState(null);

    function Calculate(){
        let inputVal = document.getElementById("BPM").value;
        console.log(inputVal);
        let fullNote = document.getElementById("fullNote");
        fullNote.value = inputVal/60;
        console.log(fullNote.value);
        let fullNoteVal = fullNote.value
        setFull(fullNoteVal);
        }

return (
 <div > 
     <Row>
     <Col size="lg">
         <div className="BPMtext">BPM:</div>
         <button id = "calcButton" onClick={Calculate}> </button>
         </Col>
         <Col size="lg">
         <input id="BPM" className="BPMInput"></input>
        </Col>
        <Col id ="sixtyfourthfNote"size="lg">
            <div>
                1/64Note
            <div>
            </div>
            </div>
        </Col>
        <Col id ="thirtysecondNote" size="lg">
        <div>
                1/32Note
            <div>
            </div>
            </div>
        </Col>
        <Col id ="sixteenthNote" size="lg">
        <div>
                1/16Note
            <div>
            </div>
            </div>
        </Col>
        <Col id = "eigthNote" size="lg">
        <div>
                1/8Note
            <div>
            </div>
            </div>
        </Col>
        <Col id = "quarterNote" size="lg">
        <div>
                1/4Note
            <div>
            </div>
            </div>
            </Col>
        <Col id = "halfNote" size="lg">
            <div>
                1/2Note
            <div>
            </div>
            </div>
            </Col>
            <Col  size="lg">
            <div>
                FullNote
                <p  id = "fullNote"> {full}</p>
            <div>
            </div>
            </div>
            </Col>
     </Row>

</div>  
)
}

export default BPMInput;