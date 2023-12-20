import logo from './logo.svg';
import './App.css';

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

import Web3 from 'web3';
import { sendRequest } from './scripts/04_request.js';

// Initialize web3 and get the current account
const web3 = new Web3(Web3.givenProvider); // Connect to the provider (e.g. MetaMask)
const account = await web3.eth.getAccounts()[0]; // Get the current account from the provider

function App() {
  // define your state variables and functions here
  // Define a state variable for the prompt
  const [prompt, setPrompt] = useState("");
  // ...
  // Define a handler function for the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the sendRequest script with the prompt as an argument
      const requestId = await sendRequest(prompt);
      // Display a success message with the request ID
      alert(`Request sent successfully! Request ID: ${requestId}`);
    } catch (error) {
      // Display an error message
      alert(error.message);
    }
  };

  // Define a handler function for the input change
  const handleChange = (event) => {
    // Set the state variable to the input value
    setPrompt(event.target.value);
  };


  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2 className="text-center">Fortnite Stats Feedback</h2>
          <p class="subtitle" className="text-center">
            A dApp that generates dynamic NFTs based on your Fortnite stats
          </p>
        </Col>
      </Row>
      <Row class="player-stats" className="justify-content-md-center">
        <Col md="auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Enter your Fortnite username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                // add your event handlers here
                // ...
                value={prompt} 
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Get my stats
            </Button>
          </Form>
        </Col>
      </Row>
      <Row class="nft" className="justify-content-md-center">
        <Col md="auto">
          <Card style={{ width: "18rem" }}>
            <Card.Header class="nft-head">Your Dynamic NFT</Card.Header>
            <Card.Body>
              <Card.Title>{/* display your NFT title here */}</Card.Title>
              <Card.Text>{/* display your NFT description here */}</Card.Text>
              <Image
                //src={/* display your NFT image here */}
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
