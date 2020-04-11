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
        let halfNote = document.getElementById("halfNote");
        let quartNote = document.getElementById("quartNote");
        let eighthNote = document.getElementById("eighthNote");
        let sixteenNote = document.getElementById("sixteenthNote");
        let thirtytwoNote = document.getElementById("thirtysecondNote");
        let sixtyfourNote = document.getElementById("sixtyfourthNote");

        fullNote.value = 60/inputVal;
        halfNote.value = 30/inputVal;
        quartNote.value = 15/inputVal;
        eighthNote.value = 7.5/inputVal;
        sixteenNote.value = 3.75/inputVal;
        thirtytwoNote.value = 1.875/inputVal;
        sixtyfourNote.value = .9375/inputVal;
        console.log(fullNote.value);
        let fullNoteVal = fullNote.value;
        let halfNoteVal = halfNote.value;
        let quartNoteVal = quartNote.value;
        let eighthNoteVal = eighthNote.value;
        let sixteenNoteVal = sixteenNote.value;
        let thirtytwoNoteVal = thirtytwoNote.value;
        let sixtyfourNoteVal = sixtyfourNote.value;

        setFull(fullNoteVal);
        setHalf(halfNoteVal);
        setQuart(quartNoteVal);
        setEighth(eighthNoteVal);
        setSixteen(sixteenNoteVal);
        setThirtyTwo(thirtytwoNoteVal);
        setSixtyFour(sixtyfourNoteVal);
        }

return (
 <div > 
     <Row>
     <Col size="lg">
         <div className="BPMtext">BPM:</div>
         <button id = "calcButton" onClick={Calculate}>Calc </button>
         </Col>
         <Col size="lg">
         <input id="BPM" className="BPMInput"></input>
        </Col>
        <Col size="lg">
            <div>
                1/64Note
                <p id ="sixtyfourthNote">{sixtyfour}</p>
            </div>
        </Col>
        <Col size="lg">
        <div>
                1/32Note
                <p id ="thirtysecondNote">{thirtytwo}</p>
            </div>
        </Col>
        <Col size="lg">
        <div>
                1/16Note
                <p id ="sixteenthNote">{sixteen}</p>
            </div>
        </Col>
        <Col size="lg">
        <div>
                1/8Note
                <p id = "eighthNote">{eighth}</p>
            </div>
        </Col>
        <Col size="lg">
        <div>
                1/4Note
                <p id = "quartNote">{quart}</p>
            </div>
            </Col>
        <Col id = "halfNote" size="lg">
            <div>
                1/2Note
            <p id = "halfNote">{half}</p>
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