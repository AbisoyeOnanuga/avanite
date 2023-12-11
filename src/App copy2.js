import React, { useEffect, useState } from "react";
// import web3 and contract
//import web3 from "./web3";
import contract from "./contract";
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
/*
// import the dotenv module
const dotenv = require("dotenv");
// load the environment variables from the .env file
dotenv.config();
// or import all the named exports as an object
const alchemy = require("alchemy-sdk");
const alch = alchemy.createAlchemy(process.env.REACT_APP_AlCHEMY_KEY);
// import your contract ABI and address
import contractABI from "../contract-abi.json";
import contractAddress from "../contract-address.json";
*/


function App() {

  /*
  // define your state variables
  const [account, setAccount] = useState("");
  const [username, setUsername] = useState("");
  const [nft, setNft] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // define your functions
  const getAccount = async () => {
    // get the user's MetaMask account
    const accounts = await alch.core.getAccounts();
    if (accounts.length > 0) {
      setAccount(accounts[0]);
    } else {
      alert("Please connect to MetaMask");
    }
  };

  const getFeedback = async (event) => {
    // prevent the default form submission behavior
    event.preventDefault();
    // check if the user has entered a username
    if (username) {
      // set the loading state to true
      setLoading(true);
      try {
        // create a contract instance using alchemy-web3
        const contract = new alch.core.Contract(contractABI, contractAddress);
        // get the NFT id for the username from the smart contract
        const nftId = await contract
          .getNftId(username)
          .call({ from: account });
        // check if the NFT id is valid
        if (nftId > 0) {
          // get the NFT data from the smart contract
          const nftData = await contract
            .getNftData(nftId)
            .call({ from: account });
          // set the NFT state with the data
          setNft({
            id: nftId,
            title: nftData.title,
            description: nftData.description,
            image: nftData.image,
            fee: nftData.fee,
          });
        } else {
          // create a new NFT for the username using the Chainlink Function
          const response = await fetch(
            "https://api.chain.link/v2/functions/<your-function-id>/runs",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Chainlink-EA-AccessKey": "<your-access-key>",
                "X-Chainlink-EA-Secret": "<your-secret>",
              },
              body: JSON.stringify({
                jobRun: {
                  data: {
                    username: username,
                  },
                },
              }),
            }
          );
          // check if the response is successful
          if (response.ok) {
            // get the response data
            const data = await response.json();
            // get the NFT id from the data
            const nftId = data.data.result;
            // get the NFT data from the smart contract
            const nftData = await contract
              .getNftData(nftId)
              .call({ from: account });
            // set the NFT state with the data
            setNft({
              id: nftId,
              title: nftData.title,
              description: nftData.description,
              image: nftData.image,
              fee: nftData.fee,
            });
          } else {
            // handle the error
            alert("Something went wrong");
          }
        }
      } catch (error) {
        // handle the error
        console.error(error);
        alert("Something went wrong");
      }
      // set the loading state to false
      setLoading(false);
    } else {
      // handle the empty input
      alert("Please enter a username");
    }
  };

  const updateFeedback = async () => {
    // check if the user has an NFT
    if (nft) {
      // set the loading state to true
      setLoading(true);
      try {
        // update the NFT feedback using the Chainlink Function
        const response = await fetch(
          "https://api.chain.link/v2/functions/<your-function-id>/runs",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Chainlink-EA-AccessKey": "<your-access-key>",
              "X-Chainlink-EA-Secret": "<your-secret>",
            },
            body: JSON.stringify({
              jobRun: {
                data: {
                  username: username,
                },
              },
            }),
          }
        );
        // check if the response is successful
        if (response.ok) {
          // get the response data
          const data = await response.json();
          // get the NFT id from the data
          const nftId = data.data.result;
          // get the NFT data from the smart contract
          const nftData = await contract
            .getNftData(nftId)
            .call({ from: account });
          // set the NFT state with the updated data
          setNft({
            id: nftId,
            title: nftData.title,
            description: nftData.description,
            image: nftData.image,
            fee: nftData.fee,
          });
        } else {
          // handle the error
          alert("Something went wrong");
        }
      } catch (error) {
        // handle the error
        console.error(error);
        alert("Something went wrong");
      }
      // set the loading state to false
      setLoading(false);
    } else {
      // handle the case when the user does not have an NFT
      alert("You do not have an NFT to update");
    }
  };

  // use the useEffect hook to get the account and the NFT on mount
  useEffect(() => {
    getAccount();
    getFeedback();
  }, []);
  */
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="text-center">Fortnite Stats Feedback</h1>
          <p className="text-center">
            A dApp that generates dynamic NFTs based on your Fortnite stats and
            feedback
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
                //src={ /*display your NFT image here*/ }
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