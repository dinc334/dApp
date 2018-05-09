pragma solidity ^0.4.19;

contract dApp {
	uint256 public totalSupply;
	string public name = "dApp Token";
	string public symbol = "dApp";
	string public standart = "dApp v0.1";
	// mapping is like assciate array (key = address, value = uint)
	mapping(address => uint256) public balanceOf;
	// allowance
	mapping (address => mapping(address => uint256)) public allowance;
	
	
	// part of Erc20 standart
	event Transfer(
		address indexed _from,
		address indexed _to,
		uint256 _value
	);
	event Approval(
		address indexed _owner,
		address indexed _spender,
		uint256 _value
	);
	
	// constructor
	// undersocre = for var that are availeble inside current function (local vars)
	function dApp(uint256 _initialSupply) public {
		// msg.sender - key,
		// msg - global variable
		// msg.sender - address that deploy a contact 
		balanceOf[msg.sender] = _initialSupply;
		totalSupply = _initialSupply;
	}

	function transfer(address _to, uint256 _value) public returns(bool success) {
		// if it falls, then stop program, if true - then run next
		require(balanceOf[msg.sender] > 0);

		balanceOf[msg.sender] -= _value;
		balanceOf[_to] += _value;
		
		Transfer(msg.sender, _to, _value);
		
		return true;
	}
	// approve
	function approve(address _spender, uint256 _value) public returns(bool success) {
		// allowance разрешение
		allowance[msg.sender][_spender] = _value;
		Approval(msg.sender,_spender,_value);
		return true;
	}
	
	// // allowance
	// function trasferFrom(address _from, address _to, uint256 _value) public returns(bool success) {
		
	// }
	
}
