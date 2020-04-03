import React from "react";
import {Col, Row, Container} from "../components/Grid";
import GenerateBtn from "../components/generateButton";
import Header from "../components/header";
import SCWidget from "../components/SCWidget";

const Main = () => {
    return(
        <Container fluid>
            <Row>
                <Header></Header>
            </Row>
            <Row>
                <Col>
                <SCWidget></SCWidget>
                </Col>
            </Row>
        </Container>
    );
};