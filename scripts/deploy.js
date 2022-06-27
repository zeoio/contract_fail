const { expect } = require('chai');
const { ethers, upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {
	const WETH = await hre.ethers.getContractFactory("WFRA");
	const weth = await WETH.deploy();
	await weth.deployed();
	console.log("weth deployed to:", weth.address);

	/*
	const Logic = await hre.ethers.getContractFactory("params");
	const logic = await Logic.deploy();
	await logic.deployed();
	console.log("logic deployed to:", logic.address);

	const Admin = await hre.ethers.getContractFactory("proxyAdmin");
	const admin = await Admin.deploy();
	await admin.deployed();
	console.log("admin deployed to:", admin.address);
	*/

	const Proxy = await ethers.getContractFactory("Test");
	proxy = await upgrades.deployProxy(Proxy);
	console.log("proxy deployed to:", proxy.address);
	await proxy.setWrap(weth.address);
	await proxy.foo({value: 10000});

	/*
	const Proxy = await ethers.getContractFactory("proxy");
	const data = "0x8129fc1c"
	proxy = await upgrades.deployProxy(Proxy, [logic.address, admin.address, data], {initializer: 'initialize'});
	await proxy.deployed();
	*/

	/*
	const proxy = await Proxy.deploy(logic.address, admin.address, data);
	await proxy.deployed();
	console.log("proxy deployed to:", proxy.address);
	*/

	// const hander = await Logic.attach(proxy.address);
	// await hander.foo({value: ethers.utils.parseEther("1.0")});
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});