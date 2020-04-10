import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
// import ReactWidget from "./components/ReactWidget/ReactWidget";
import GenerateBtn from "./components/generateButton/generateButton";
import AddBtn from "./components/AddButton/AddButton";
// import SCWidget from "./components/SCWidget/SCWidget";
import Header from "./components/header/header";
import {Col, Row, Container } from "./components/Grid";
// import SoundCloud from "./SoundCloud";
const App = () => {

    const generateAudio = (event) => {
        event.preventDefault();


    }

    return(
        <div>
     <div>
    <Header></Header>
    </div>

 <Container fluid>
     <Row>
         <Col size="lg">
         
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