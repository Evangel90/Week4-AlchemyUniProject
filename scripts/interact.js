const hre = require("hardhat");

const INTERACT_CONTRACT_ADDRESS = process.env.InteractContractAddress;
const ATTEMT_CONTRACT_ADDRESS = process.env.AttemptContractAddress;

async function main() {
  const interact = await hre.ethers.getContractAt("Interact", INTERACT_CONTRACT_ADDRESS);

  const tx = await interact.triggerEvent(ATTEMT_CONTRACT_ADDRESS);

  await tx.wait();//wait for the transaction to be added to a block

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
