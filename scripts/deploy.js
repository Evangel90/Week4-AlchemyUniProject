const hre = require("hardhat");

async function main() {
  const Attempt = await hre.ethers.getContractFactory("Contract");
  const attempt= await Attempt.deploy();

  await attempt.deployed();

  console.log(
    `"Attempt" Contract deployed to ${attempt.address}`
  ); 

  const Interact = await hre.ethers.getContractFactory("Interact");
  const interact= await Interact.deploy();
  // const add = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

  await interact.deployed();

  console.log(
    `"Interact" Contract deployed to ${interact.address}`
  );

  // const tx = await interact.triggerEvent(add);

  // await tx.wait();

  // console.log("triggered")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
