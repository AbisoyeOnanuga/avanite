import React, { useState, useEffect } from "react";
import Web3 from "web3";
import FortniteStats from "./FortniteStats.json"; // Import the smart contract ABI

// Define the smart contract address
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS; // Replace this with your smart contract address

// Define the web3 instance
let web3;

// Define the contract instance
let contract;
import React, { useEffect, useState } from "react";

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
  // Define the state variables
  const [account, setAccount] = useState(""); // The user's account address
  const [name, setName] = useState(""); // The Fortnite username
  const [requestId, setRequestId] = useState(""); // The request ID
  const [stats, setStats] = useState(null); // The Fortnite stats
  const [loading, setLoading] = useState(false); // The loading indicator

  // Define the useEffect hook to load the web3 and contract instances
  useEffect(() => {
    async function loadWeb3AndContract() {
      // Check if Metamask is installed
      if (window.ethereum) {
        // Create a new web3 instance
        web3 = new Web3(window.ethereum);

        // Request access to the user's account
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Get the user's account address
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        // Create a new contract instance
        contract = new web3.eth.Contract(FortniteStats.abi, CONTRACT_ADDRESS);

        // Listen for the RequestMade event
        contract.events.RequestMade().on("data", (event) => {
          // Set the request ID
          setRequestId(event.returnValues.requestId);
        });

        // Listen for the RequestFulfilled event
        contract.events.RequestFulfilled().on("data", async (event) => {
          // Check if the request ID matches
          if (event.returnValues.requestId === requestId) {
            // Get the stats from the contract
            const stats = await contract.methods
              .getStats(requestId)
              .call({ from: account });

            // Convert the stats to a readable format
            const formattedStats = {
              id: web3.utils.toAscii(stats.id),
              image: web3.utils.toAscii(stats.image),
              score: stats.score.toString(),
              kills: stats.kills.toString(),
              kd: stats.kd.toString(),
              winrate: stats.winrate.toString(),
            };

            // Set the stats
            setStats(formattedStats);

            // Reset the loading indicator
            setLoading(false);
          }
        });
      } else {
        // Alert the user to install Metamask
        alert("Please install Metamask to use this app");
      }
    }

    // Call the loadWeb3AndContract function
    loadWeb3AndContract();
  }, []);

  // Define the handleChange function to handle the input change
  function handleChange(event) {
    // Set the name state
    setName(event.target.value);
  }

  // Define the handleSubmit function to handle the form submission
  async function handleSubmit(event) {
    // Prevent the default behavior
    event.preventDefault();

    // Check if the name is not empty
    if (name) {
      // Set the loading indicator
      setLoading(true);

      // Make a request to the contract
      await contract.methods
        .requestStats(name)
        .send({ from: account, value: web3.utils.toWei("0.1", "ether") });
    } else {
      // Alert the user to enter a name
      alert("Please enter a Fortnite username");
    }
  }

  // Return the JSX elements
  return (
    <div className="App">
      <h1>Fortnite Stats</h1>
      <p>Enter your Fortnite username and see your stats</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your Fortnite username"
        />
        <button type="submit">Submit</button>
      </form>
      {loading && <p>Loading...</p>}
      {stats && (
        <div className="stats">
          <p>ID: {stats.id}</p>
          <p>Image: {stats.image}</p>
          <p>Score: {stats.score}</p>
          <p>Kills: {stats.kills}</p>
          <p>K/D: {stats.kd}</p>
          <p>Win Rate: {stats.winrate}</p>
        </div>
      )}
    </div>
  );
}

export default App;