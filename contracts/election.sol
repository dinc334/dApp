pragma solidity ^0.4.19;

contract Election{
	// Model of candidate
	struct Candidate{
		uint id;
		string name;
		uint voteCount;
	}

	mapping (address => uint) myMapping;
	
	// contrucror
	function Election () public {
		candidate = 'Dinc';
	}
	
}