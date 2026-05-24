const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying Confidential Token via account:", deployer.address);

  const ConfidentialToken = await hre.ethers.getContractFactory("ConfidentialToken");
  const token = await ConfidentialToken.deploy("Private Dollar", "pUSD");

  await token.waitForDeployment();
  console.log(`ConfidentialToken successfully deployed to: ${await token.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
