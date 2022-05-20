import { useMutation } from 'react-query';

import { getNFTContractWithSigner } from 'helpers/contract';
import { PRICE_IN_WEI } from 'constant';
import useWeb3Store from 'stores/useWeb3Store';
import { BigNumber } from '@ethersproject/bignumber';

const OWNER_ADDRESS = process.env.REACT_APP_OWNER_ADDRESS;

const useMint = () => {
  const nftContract = getNFTContractWithSigner();
  const { accountAddress } = useWeb3Store();

  return useMutation(async (data: string) => {
    if (!nftContract) throw Error('You much connect your wallet first!');

    return await (
      await nftContract.safeMint(data, {
        value: OWNER_ADDRESS !== accountAddress ? BigNumber.from(PRICE_IN_WEI) : BigNumber.from('0'),
      })
    ).wait();
  });
};

export default useMint;
