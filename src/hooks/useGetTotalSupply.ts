import { useQuery } from 'react-query';

import { getNFTContractRPC } from 'helpers/contract';

const useGetTotalSupply = () => {
  const nftContract = getNFTContractRPC();

  return useQuery(['total supply'], async () => {
    return +(await nftContract.getCurrentCounter()) - 1;
  });
};

export default useGetTotalSupply;
