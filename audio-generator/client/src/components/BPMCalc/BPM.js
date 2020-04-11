import React from "react";
import "./BPM.css";
import {Col, Row, Container} from "../Grid/index";

function BPMInput(){
return (
 <div > 
     <Row>
     <Col size="lg">
         <div className="BPMtext">BPM:</div>
         </Col>
         <Col size="lg">
         <input className="BPMInput"></input>
        </Col>
        <Col size="lg">
            <div>
                1/64Note
            <div>
            </div>
            </div>
        </Col>
        <Col size="lg">
        <div>
                1/32Note
            <div>
            </div>
            </div>
        </Col>
        <Col size="lg">
        <div>
                1/16Note
            <div>
            </div>
            </div>
        </Col>
        <Col size="lg">
        <div>
                1/8Note
            <div>
            </div>
            </div>
        </Col>
        <Col size="lg">
        <div>
                1/4Note
            <div>
            </div>
            </div>
            </Col>
        <Col size="lg">
            <div>
                1/2Note
            <div>
            </div>
            </div>
            </Col>
            <Col size="lg">
            <div>
                FullNote
            <div>
            </div>
            </div>
            </Col>
     </Row>

</div>  
)
}

export default BPMInput;