import Button from '@mui/material/Button';
import { shortAddress } from 'helpers/utils';

import useWeb3Store from 'stores/useWeb3Store';
import { useState } from 'react';

const ConnectButton = () => {
  const { accountAddress, loadWeb3Modal, logoutOfWeb3Modal, isConnected } = useWeb3Store();
  const [isHover, setIsHover] = useState(false);

  return (
    <Button
      variant="contained"
      sx={{
        boxShadow: 'none',
        borderRadius: 3,
        width: 250,
        paddingY: '0.6rem',
      }}
      onClick={() => {
        if (!isConnected) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      {!isConnected ? 'Connect Wallet' : isHover ? 'Logout' : accountAddress && shortAddress(accountAddress)}
    </Button>
  );
};

export default ConnectButton;
