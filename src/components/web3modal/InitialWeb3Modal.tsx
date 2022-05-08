import { useCallback, useEffect, useMemo, useState } from 'react';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';
import { providers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import useWeb3Store from 'stores/useWeb3Store';
import { handleErrorMessage } from 'helpers/error';

const CHAIN_ID = Number(process.env.REACT_APP_CHAIN_ID);
const NETWORK = String(process.env.REACT_APP_CHAIN_NAME);
const RPC = String(process.env.REACT_APP_CHAIN_RPC_URL);

const idToHexString = (id: number) => {
  return '0x' + id.toString(16);
};

interface ISwitchNetwork {
  provider: Web3Provider;
  networkId: number;
}

const switchNetwork = async ({ provider, networkId }: ISwitchNetwork) => {
  try {
    await provider.send('wallet_switchEthereumChain', [{ chainId: idToHexString(networkId) }]);
  } catch (e: any) {
    // If the chain has not been added to the user's wallet
    if (e?.code === 4902) {
      const params = [
        {
          chainId: idToHexString(networkId),
          chainName: 'Celo',
          rpcUrls: [RPC],
          nativeCurrency: {
            name: 'Celo',
            symbol: 'CELO',
            decimals: 18,
          },
        },
      ];

      try {
        await provider.send('wallet_addEthereumChain', params);
        await provider.send('wallet_switchEthereumChain', [{ chainId: idToHexString(networkId) }]);
      } catch (e) {
        console.log(e);
      }
    }
  }
};

const InitialWeb3Modal = () => {
  const [provider, setProvider] = useState<Web3Provider | undefined>();
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState<string | undefined>();
  const [networkId, setNetworkId] = useState<any>();

  const { setWeb3 } = useWeb3Store();

  const web3Modal = useMemo(
    () =>
      new Web3Modal({
        network: NETWORK,
        cacheProvider: true,
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: {
                [CHAIN_ID]: RPC,
              },
            },
          },
        },
      }),
    [],
  );

  const _initListeners = useCallback(
    (rawProvider: any) => {
      if (rawProvider?.on) {
        const handleAccountsChanged = () => {
          setTimeout(() => window.location.reload(), 1);
        };

        const handleChainChanged = async (_chainId: string) => {
          const newChainId = Number(_chainId);
          setNetworkId(newChainId);
          setTimeout(() => window.location.reload(), 1);
        };

        const handleDisconnect = (error: { code: number; message: string }) => {
          console.log('disconnect', error);
          logoutOfWeb3Modal();
        };

        rawProvider.on('accountsChanged', handleAccountsChanged);
        rawProvider.on('chainChanged', handleChainChanged);
        rawProvider.on('disconnect', handleDisconnect);
      }
    },
    [provider],
  );

  // Open wallet selection modal.
  const loadWeb3Modal = useCallback(async function () {
    try {
      const rawProvider = await web3Modal.connect();
      await rawProvider.enable();
      _initListeners(rawProvider);
      const web3Provider = new providers.Web3Provider(rawProvider);
      setProvider(web3Provider);

      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      const network = await web3Provider.getNetwork();
      setAccountAddress(address);
      setNetworkId(network.chainId);

      if (network.chainId != CHAIN_ID) {
        handleErrorMessage('Network not supported');
      } else {
        setIsConnected(true);
      }
    } catch (e: any) {
      console.log(e?.message);
    }
  }, []);

  const logoutOfWeb3Modal = useCallback(
    async function () {
      web3Modal.clearCachedProvider();
      setProvider(undefined);
      setIsConnected(false);
      setAccountAddress(undefined);

      setTimeout(() => {
        window.location.reload();
      }, 1);
    },
    [provider, web3Modal],
  );

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  useEffect(() => {
    if (networkId !== CHAIN_ID && accountAddress && provider) {
      switchNetwork({ provider, networkId: CHAIN_ID });
    }
  }, [networkId, provider, accountAddress]);

  useEffect(() => {
    setWeb3({
      provider,
      logoutOfWeb3Modal,
      loadWeb3Modal,
      accountAddress,
      isConnected,
    });
  }, [provider, accountAddress, isConnected]);

  return <></>;
};

export default InitialWeb3Modal;
