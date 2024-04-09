// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract IcoCocay is Ownable {
    IERC20 USDT;
    IERC20 CocayToken;
    constructor(address _usdtAddress, address _cocayAddress) Ownable(msg.sender){
        USDT = IERC20(_usdtAddress);
        CocayToken = IERC20(_cocayAddress);
    }
    mapping(string => address) public sponsorCodes;

    function addSponsor(string memory _name) public {
        sponsorCodes[_name] = msg.sender;
    }

    function buyCocays(uint256 _amount) public onlyOwner{
      require(USDT.transferFrom(msg.sender,sponsorCodes[sponsorCode],  (_amount * 10) / 100 ), "No se pudo enviar USDT");
      require(USDT.transferFrom(msg.sender,address(this), (_amount * 90) / 100), "No se pudo enviar USDT");
      require(CocayToken.transfer(msg.sender, (_amount)), "No se pudo enviar token Cocay");
    }


}
