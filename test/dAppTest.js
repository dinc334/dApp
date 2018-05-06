var dApp = artifacts.require("./dApp.sol");

// accounts - all ganache addresses
contract('dApp', (accounts)=>{
	var tokenInstance;

	it('name and symbol value', ()=>{
		return dApp.deployed().then((instance)=>{
			tokenInstance = instance;
			return tokenInstance.name();
		}).then((name)=>{
			assert.equal(name,"dApp Token","wrong name of token");
			return tokenInstance.symbol();
		}).then((symbol)=>{
			assert.equal(symbol,"dApp","wrong symbol of token");
			return tokenInstance.standart();
		}).then((standart)=>{
			assert.equal(standart,"dApp v0.1","wrong standart of token")
		})
	})

	it('check total supply', ()=>{
		return dApp.deployed().then((instance)=>{
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then((totalSupply)=>{
			assert.equal(totalSupply.toNumber(),1000000,"wrong total Supply");
			return tokenInstance.balanceOf(accounts[0]);
		}).then((adminBalance)=>{
			// test, that check if admin acc has all tokens
			assert.equal(adminBalance.toNumber(),1000000,"some text?");
		})
	})

	it('check transer function', function() {
    return dApp.deployed().then(function(instance) {
      tokenInstance = instance;
      // Test `require` statement first by transferring something larger than the sender's balance
      return tokenInstance.transfer.call(accounts[1], 250000, { from: accounts[0] });
    }).then(function(success) {
      assert.equal(success, true, 'it returns true');
      return tokenInstance.transfer(accounts[1], 250000, { from: accounts[0] });
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, 'triggers one event');
      assert.equal(receipt.logs[0].event, 'Transfer', 'should be the "Transfer" event');
      assert.equal(receipt.logs[0].args._from, accounts[0], 'logs the account the tokens are transferred from');
      assert.equal(receipt.logs[0].args._to, accounts[1], 'logs the account the tokens are transferred to');
      assert.equal(receipt.logs[0].args._value, 250000, 'logs the transfer amount');
      return tokenInstance.balanceOf(accounts[1]);
    }).then(function(balance) {
      assert.equal(balance.toNumber(), 250000, 'adds the amount to the receiving account');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.toNumber(), 750000, 'deducts the amount from the sending account');
    });
  });
})