pragma solidity ^0.4.21;

contract Coin {
    // The keyword "public" makes those variables
    // readable from outside.
    address public owner;
    string public name;
    uint256 public totalSupply;
    mapping (address => uint) public balances;

    // Events allow light clients to react on changes efficiently.
    event Sent(address from, address to, uint amount);

    // This is the constructor whose code is
    // run only when the contract is created.
    function Coin() public {
        totalSupply = 10000;
        name = 'dincCoin';
        owner = msg.sender;
        // owner will have all coins from init
        balances[owner] = totalSupply;
    }

    function send(address receiver, uint amount) public {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }
}