var dApp = artifacts.require("./dApp.sol");

contract('dApp', (accounts)=>{
	it('check total supply', ()=>{
		return dApp.deployed().then((instance)=>{
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then((totalSupply)=>{
			assert.equal(totalSupply.toNumber(),1000000,"wrong total Supply");
		})
	})
})