module.exports = {
  // connect to ganache local blockckain
  networks: {
  	development: {
  		host:"127.0.0.1",
  		port: "7545",
  		network_id: "*" // match any network if
  	}
  }
};
