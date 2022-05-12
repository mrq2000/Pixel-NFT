import { getNFThContractRPC } from './../helpers/contract';
import { useMutation } from 'react-query';

import { getNFTContractWithSigner } from 'helpers/contract';
import { PRICE_IN_WEI } from 'constant';

const useMint = () => {
  const nftContract = getNFTContractWithSigner();
  const test = getNFThContractRPC();

  return useMutation(async (data: string) => {
    if (!nftContract) throw Error('You much connect your wallet first!');
    console.log(test);

    return await (
      await nftContract.safeMint(data, {
        value: PRICE_IN_WEI,
      })
    ).wait();
  });
};

export default useMint;
