import React from "react";
import "./BPM.css";
import {Col, Row, Container} from "../Grid/index";

function BPMInput(){
   
    function Calculate(){
        let inputVal = document.getElementById("BPM").value;
        console.log(inputVal);
        let full = document.getElementById("fullNote");
        full.value = inputVal/60;
        console.log(full.value);
        full.text = full.value;
        console.log(full.text);  
         
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
                <p id = "fullNote"></p>
            <div>
            </div>
            </div>
            </Col>
     </Row>

</div>  
)
}

export default BPMInput;