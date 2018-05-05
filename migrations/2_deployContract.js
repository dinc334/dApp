// creating artifacts is allow us to create contract abstraction for front page
var dApp = artifacts.require("./dApp.sol");

module.exports = function(deployer) {
  deployer.deploy(dApp);
};
