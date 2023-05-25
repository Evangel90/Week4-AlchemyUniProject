const hre = require("hardhat");

async function main() {
  const Interact = await hre.ethers.getContractFactory("Interact");
  const interact= await Interact.deploy();

  await interact.deployed();

  console.log(
    `Contract deployed to ${interact.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
