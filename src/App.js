import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
} from "react-bootstrap";
import { FaEthereum } from "react-icons/fa";

function App() {
  // define your state variables and functions here
  // ...

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="text-center">Avanite</h1>
          <p className="text-center">
            A dApp that generates dynamic NFTs based on your Fortnite stats using Avalanche C-Chain, Chainlink oracle and Chainlink functions
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Enter your Fortnite username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                // add your event handlers here
                // ...
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Get Feedback
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card style={{ width: "18rem" }}>
            <Card.Header>Your Dynamic NFT</Card.Header>
            <Card.Body>
              <Card.Title>{/* display your NFT title here */}</Card.Title>
              <Card.Text>{/* display your NFT description here */}</Card.Text>
              <Image
                alt="NFT image"
                rounded
              />
              <Button variant="success" className="mt-3">
                Update Feedback
              </Button>
              <Button variant="danger" className="mt-3 ms-3">
                Delete NFT
              </Button>
            </Card.Body>
            <Card.Footer>
              <FaEthereum /> {/* display your subscription fee here */}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
