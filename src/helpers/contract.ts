// import { IUseWeb3Store } from './../stores/useWeb3Store';
// import { ethers } from 'ethers';

// import { NFT as INFT } from 'typechain/NFT';
// import { Marketplace as IMarketplace } from 'typechain/Marketplace';
// import { IERC20 } from 'typechain/IERC20';

// import { abi as NFTAbi } from 'abi/NFT.json';
// import { abi as MarketplaceAbi } from 'abi/Marketplace.json';
// import { abi as IERC20Abi } from 'abi/IERC20.json';

// import useWeb3Store from 'stores/useWeb3Store';

// const CONTRACT_ADDRESS = String(process.env.REACT_APP_CONTRACT_ADDRESS);
// const MARKET_CONTRACT_ADDRESS = String(process.env.REACT_APP_MARKET_CONTRACT_ADDRESS);
// const CHAIN_RPC_URL = String(process.env.REACT_APP_CHAIN_RPC_URL);

// export const getNFTContractWithSigner = () => {
//   const { provider, isConnected } = useWeb3Store();

//   if (!provider || !isConnected) throw 'You much connect to wallet!';
//   const contract = new ethers.Contract(CONTRACT_ADDRESS, NFTAbi, provider.getSigner()) as INFT;

//   return contract;
// };

// export const getNFThContractRPC = () => {
//   const provider = new ethers.providers.JsonRpcProvider(CHAIN_RPC_URL);
//   const contract = new ethers.Contract(CONTRACT_ADDRESS, NFTAbi, provider) as INFT;

//   return contract;
// };

// export const getMarketContractWithSigner = () => {
//   const { provider, isConnected } = useWeb3Store();

//   if (!provider || !isConnected) throw 'You much connect to wallet!';
//   const contract = new ethers.Contract(MARKET_CONTRACT_ADDRESS, MarketplaceAbi, provider.getSigner()) as IMarketplace;

//   return contract;
// };

// export const getMarketContractRPC = () => {
//   const provider = new ethers.providers.JsonRpcProvider(CHAIN_RPC_URL);
//   const contract = new ethers.Contract(MARKET_CONTRACT_ADDRESS, MarketplaceAbi, provider) as IMarketplace;

//   return contract;
// };

// export const getMockErc20ContractWithSigner = (currencyAddress: string, web3Store: IUseWeb3Store) => {
//   const { provider, isConnected } = web3Store;

//   if (!provider || !isConnected) throw 'You much connect to wallet!';
//   const erc20Contract = new ethers.Contract(currencyAddress, IERC20Abi, provider.getSigner()) as IERC20;

//   return erc20Contract;
// };

export const a = 1;
