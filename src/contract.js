import web3 from "./web3";

const address = process.env.REACT_APP_CONTRACT_ADDRESS;

const abi = [
  // your contract ABI
];

const contract = new web3.eth.Contract(abi, address);

export default contract;
