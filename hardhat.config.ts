import { HardhatUserConfig } from 'hardhat/config';
import dotenv from 'dotenv';
import '@nomicfoundation/hardhat-toolbox';

dotenv.config();
console.log(process.env);

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  networks: {
    rinkeby: {
      url: process.env.REACT_APP_ROPSTEN_ROC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY,
  },
};

export default config;
