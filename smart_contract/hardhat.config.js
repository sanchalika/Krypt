// https://eth-ropsten.alchemyapi.io/v2/liJ_uWh2mJal0ceE0AVFuZhi9vXtChHu

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/liJ_uWh2mJal0ceE0AVFuZhi9vXtChHu',
      accounts: ['7adc5696736df8dcf4cd136aab9d5af498d2a22e90b45707a3896a7d14e4410c']
    }
  }
}