// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

interface TheEvent {
    function attempt() external;
}

contract Interact {

    function triggerEvent(address contractAddress) external{
        // EmitEvent emitContractEvent = EmitEvent(contractAddress);
        // emitContractEvent.attempt();
        TheEvent(contractAddress).attempt();
    }
}
