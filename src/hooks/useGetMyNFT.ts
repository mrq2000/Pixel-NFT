import { useInfiniteQuery } from 'react-query';

import { getNFTContractWithSigner } from 'helpers/contract';
import useWeb3Store from 'stores/useWeb3Store';

const LIMIT = 100;

const useGetMyNFT = () => {
  const nftContract = getNFTContractWithSigner();
  const { accountAddress } = useWeb3Store();

  return useInfiniteQuery(
    ['my nft'],
    async ({ pageParam = 0 }) => {
      if (!nftContract || !accountAddress) throw Error('You much connect your wallet first!');
      if (pageParam == 'Done') throw new Error('');

      return await nftContract.getOwnerNFTData(accountAddress, pageParam, LIMIT);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage[lastPage.length - 1] == '') return 'Done';
        return allPages.length;
      },
    },
  );
};

export default useGetMyNFT;
