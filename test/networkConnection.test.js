// test/networkConnection.test.js

const { expect } = require("chai");
const { providers } = require("ethers");
const { BUNDLER_RPC_URL } = require("../utils/constants"); // Adjust the path according to your project structure

describe("Network Connection Test", function () {
  it("should connect to the Ethereum network and retrieve network details", async function () {
    // Initialize the provider
    const provider = new providers.JsonRpcProvider(BUNDLER_RPC_URL);

    // Fetch the network details
    const network = await provider.getNetwork();

    // Log the network details (optional)
    console.log("Network detected:", network);

    // Check if the network name and chainId are as expected (you can adjust these values)
    expect(network).to.have.property("name");
    expect(network).to.have.property("chainId");

    // For Sepolia testnet, the chainId is 11155111
    expect(network.chainId).to.equal(11155111);
  });
});
