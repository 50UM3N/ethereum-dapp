const SKAM = artifacts.require("Skam");

module.exports = function (deployer) {
  deployer.deploy(SKAM,["0x63616e6469646174653100000000000000000000000000000000000000000000","0x6332000000000000000000000000000000000000000000000000000000000000","0x6333000000000000000000000000000000000000000000000000000000000000"]);
};