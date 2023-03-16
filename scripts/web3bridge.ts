import { ethers } from "hardhat";
async function main() {
    const [owner] = await ethers.getSigners();
    const getContractName = await ethers.getContractFactory("Web3bridge");
    const deployContract = await getContractName.deploy();
    const deployedContract = await deployContract.deployed();
    const getContractAddress = deployedContract.address;
    console.log(`This is our nft contract deployed at ${getContractAddress}`)

} 
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});