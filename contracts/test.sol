//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/utils/Address.sol";

import "./IWETH.sol";

contract Test {
    // using Address for address;

    address public nativeWrap;

    receive() external payable {}

    function foo() external payable {
		uint256 _amount = msg.value;

		IWETH(nativeWrap).deposit{value: _amount}();
		IWETH(nativeWrap).withdraw(_amount);
    }

    function setWrap(address _addr) external {
        nativeWrap = _addr;
    }
}
