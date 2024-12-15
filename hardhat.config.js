require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.0" },
      { version: "0.8.1" },
      { version: "0.8.18" }, // Use the latest 0.8.x version supported by OpenZeppelin
    ],
  },
  networks: {
    mantleSepolia: {
      url: process.env.SEPOLIA_RPC_URL, // Mantle's Sepolia RPC URL
      chainId: 5003, // Mantle Sepolia chain ID
      accounts: [process.env.PRIVATE_KEY], // Private key of your deploying account
    },
  },
};
