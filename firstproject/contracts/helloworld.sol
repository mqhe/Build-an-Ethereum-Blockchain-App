// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract helloworld {
    string private helloMessage = "Hello World";

    function gethelloMessage() public view returns(string memory){
        return helloMessage;
    }
}
