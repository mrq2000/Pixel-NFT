import { Link } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import ConnectButton from './ConnectButton';

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
        <Box sx={{ width: 250 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'end', my: 1 }}>
            <IconButton onClick={handleCloseSideBar}>
              <CloseTwoToneIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/">
              <MuiLink
                variant="h4"
                sx={{
                  textDecoration: 'none',
                  ':hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Home
              </MuiLink>
            </Link>

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
