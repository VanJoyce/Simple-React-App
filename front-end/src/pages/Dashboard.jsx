import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { List } from "../components";
import { carList, customerList, prodManList } from "../testData";

function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <Container className="container-space">
                <Row>
                    <Col>
                        <Row>
                            <h1>{carList.length}</h1>
                        </Row>
                        <Row>CARS</Row>
                    </Col>
                    <Col>
                        <Row>
                            <h1>{customerList.length}</h1>
                        </Row>
                        <Row>CUSTOMERS</Row>
                    </Col>
                    <Col>
                        <Row>
                            <h1>{prodManList.length}</h1>
                        </Row>
                        <Row>PRODUCT MANAGERS</Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;
