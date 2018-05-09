var dApp = artifacts.require("./dApp.sol");

module.exports = function(deployer) {
	// second arguments for contructor
	deployer.deploy(dApp, 1000000);
};
