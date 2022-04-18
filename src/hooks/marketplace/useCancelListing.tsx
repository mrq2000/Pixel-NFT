import { useMutation } from 'react-query';

import { getMarketContractWithSigner } from 'helpers/contract';

interface ICancelListing {
  cashId: number;
}

const useCancelListing = () => {
  const marketContract = getMarketContractWithSigner();

  return useMutation(async ({ cashId }: ICancelListing) => {
    return await (await marketContract.cancelListing(cashId)).wait();
  });
};

export default useCancelListing;
