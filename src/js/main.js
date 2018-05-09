"use strict";
var App = {
	web3Provider: null,
	contracts: {},
	init: ()=>{
		console.log("App run");
		return App.initWeb3();
	},
	initWeb3: ()=>{
		if (typeof web3 !== 'undefined') {
		  App.web3Provider = web3.currentProvider;
		  web3 = new Web3(web3.currentProvider);
		} else {
		  // If no injected web3 instance is detected, fallback to Ganache.
		  App.web3Provider = new web3.providers.HttpProvider('http:node.expanse.tech');
		  web3 = new Web3(App.web3Provider);

		}
		//return App.initContracts();
	},
 //  	initContracts: function() {
 //    	$.getJSON("dApp.json", function(dappTokenSale) {
 //      		App.contracts.DappTokenSale = TruffleContract(dappTokenSale);
 //      		App.contracts.DappTokenSale.setProvider(App.web3Provider);
 //      		App.contracts.DappTokenSale.deployed().then(function(dappTokenSale) {
 //        console.log("Dapp Token Sale Address:", dappTokenSale.address);
 //      });
	// 	})
	// },
	run: ()=>{
		console.log("Test2")
		web3.eth.getBlock("latest", (err,result)=>{
			if(err){
				console.log("Nope")
			} else {
				$('.test').html(result.number)
			}
			
		})
	}



}
$(document).ready(()=>{
	App.init();
	 $(".get").click(()=>{
    	App.run();
    });

})