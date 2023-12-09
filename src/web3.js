import alchemyWeb3 from "@alch/alchemy-web3";

const web3 = alchemyWeb3.createAlchemyWeb3(process.env.REACT_APP_ALCHEMY_KEY);

export default web3;
