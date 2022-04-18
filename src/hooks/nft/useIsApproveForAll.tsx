import { useQuery } from 'react-query';

import useWeb3Store from 'stores/useWeb3Store';
import { getNFTContractWithSigner } from 'helpers/contract';

const MARKET_CONTRACT_ADDRESS = String(process.env.REACT_APP_MARKET_CONTRACT_ADDRESS);

const useIsApproveForAll = () => {
  const { accountAddress } = useWeb3Store();
  const nftContract = getNFTContractWithSigner();

  return useQuery(
    'isApprovedForAll',
    async () => {
      return await nftContract.isApprovedForAll(accountAddress || '', MARKET_CONTRACT_ADDRESS);
    },
    {
      staleTime: Infinity,
      cacheTime: 600000, // 10M
      keepPreviousData: false,
    },
  );
};

export default useIsApproveForAll;
