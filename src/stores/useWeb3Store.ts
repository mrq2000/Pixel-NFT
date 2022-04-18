/* eslint-disable @typescript-eslint/no-empty-function */
import create from 'zustand';
import { Web3Provider } from '@ethersproject/providers';

interface web3Context {
  provider?: Web3Provider;
  loadWeb3Modal: () => void;
  logoutOfWeb3Modal: () => void;
  accountAddress?: string;
  isConnected: boolean;
}

export interface IUseWeb3Store extends web3Context {
  setWeb3: (web3: web3Context) => void;
}

const useWeb3Store = create<IUseWeb3Store>((set) => ({
  provider: undefined,
  loadWeb3Modal: () => {},
  logoutOfWeb3Modal: () => {},
  accountAddress: undefined,
  setWeb3: (web3) => set(() => web3),
  isConnected: false,
}));

export default useWeb3Store;
