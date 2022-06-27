//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import "./IWETH.sol";

contract params is OwnableUpgradeable {
    using Address for address;

    address public nativeWrap;

    function initialize() public initializer {
		__Ownable_init_unchained();
	}

    receive() external payable {}

    function foo() external payable {
		uint256 _amount = msg.value;

		IWETH(nativeWrap).deposit{value: _amount}();
		IWETH(nativeWrap).withdraw(_amount);
    }

    function setWrap(address _addr) external onlyOwner {
        nativeWrap = _addr;
    }
}
