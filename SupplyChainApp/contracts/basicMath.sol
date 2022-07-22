// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract basicMath {
    uint256 constant public MAX_UINT256 = 10;

    function add(uint256 _numberA, uint256 _numberB) public pure returns(uint256) {
        return _numberA + _numberB;
    }
}