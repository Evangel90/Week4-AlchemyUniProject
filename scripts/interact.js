require("dotenv").config();

const hre = require("hardhat");

const CONTRACT_ADDRESS = "process.env.ContractAddress";

async function main() {
  const Interact = await hre.ethers.getContractAt("Interact", CONTRACT_ADDRESS);
  const interact= await Interact.deploy();

  await interact.triggerEvent(process.env.ExternalContractAddress);

  console.log(
    `Event Triggered`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
