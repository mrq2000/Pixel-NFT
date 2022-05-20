import { useQuery } from 'react-query';

import { getNFTContractRPC } from 'helpers/contract';

const useGetNFTs = (offset: number, limit: number) => {
  const nftContract = getNFTContractRPC();

  return useQuery(['get nft', offset, limit], async () => {
    return await nftContract.getNFTData(offset, 1000);
  });
};

export default useGetNFTs;
