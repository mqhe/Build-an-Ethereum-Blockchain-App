const ERC20 = artifacts.require("ERC20");
const SupplyChain = artifacts.require("SupplyChain");
//const basicMath = artifacts.require("basicMath");

module.exports = function (deployer) {
  deployer.deploy(ERC20, "Mickie Token", "Mcoin");
  deployer.deploy(SupplyChain);
};
