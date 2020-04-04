import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";
import GenerateBtn from "./components/generateButton/generateButton";
import SCWidget from "./components/SCWidget/SCWidget";

function App(){
    return(
        <div>
     <div>
    Text
    </div>

    <button> 
    Button
    </button>
    <SCWidget></SCWidget>
    <SCWidget></SCWidget>
    <SCWidget></SCWidget>
    <GenerateBtn></GenerateBtn>
        </div>
       
    
        // <Router>
        //     <div>
        //         <Route path="/" component={Main} />
        //     </div>
        // </Router>
    );
}

export default App;