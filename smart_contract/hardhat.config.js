//https://eth-sepolia.g.alchemy.com/v2/NyjNnQAWmNLi7pYXIrb8TLLAxGozPOSp
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/NyjNnQAWmNLi7pYXIrb8TLLAxGozPOSp',
      accounts: ['dba6d0de9bd86512d8adf0a7fad0e5252132024ba440df96e38d0a8a9fcf428d'],
    },
  },
};