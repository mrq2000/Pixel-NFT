import { Link } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import ConnectButton from './ConnectButton';
import CustomLink from 'components/common/CustomLink';

import useWeb3Store from 'stores/useWeb3Store';

interface ISidebarMobileProps {
  openSideBar: boolean;
  handleCloseSideBar: () => void;
}

const SidebarMobile = ({ openSideBar, handleCloseSideBar }: ISidebarMobileProps) => {
  const { accountAddress, isConnected } = useWeb3Store();

  return (
    <Drawer anchor="right" open={openSideBar} onClose={handleCloseSideBar}>
      <Toolbar>
        <Box
          sx={{
            width: 250,
            a: {
              textDecoration: 'none',
            },
          }}
          role="presentation"
        >
          <Box sx={{ display: 'flex', justifyContent: 'end', my: 1 }}>
            <IconButton onClick={handleCloseSideBar}>
              <CloseTwoToneIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box mb={2}>
              <CustomLink to="/">Home</CustomLink>
            </Box>

            {isConnected && (
              <Box mb={2}>
                <CustomLink to="/profile">Profile</CustomLink>
              </Box>
            )}

            <Box mb={2}>
              <CustomLink to="/gallery">Gallery</CustomLink>
            </Box>
            <Box mb={2}>
              <CustomLink to="/mint">Mint</CustomLink>
            </Box>
            <Box mb={2}>
              <CustomLink to="/marketplace">Marketplace</CustomLink>
            </Box>

            <Box sx={{ display: 'inline' }}>
              <ConnectButton />
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </Drawer>
  );
};

export default SidebarMobile;
