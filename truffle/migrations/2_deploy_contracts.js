var sample = artifacts.require("./sample.sol");
module.exports = function(deployer) {
  deployer.deploy(sample);
};
