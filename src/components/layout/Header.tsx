import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ConnectButton from './ConnectButton';
import useWeb3Store from 'stores/useWeb3Store';
import CustomLink from 'components/common/CustomLink';

import LOGO from 'assets/logo.png';

interface IHeaderProps {
  handleOpenSideBar: () => void;
}

const Header = ({ handleOpenSideBar }: IHeaderProps) => {
  const { isConnected } = useWeb3Store();

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: (theme: Theme) => `${theme.palette.background.default}80`,
        color: (theme: Theme) => theme.palette.primary.main,
        backdropFilter: 'blur(6px)',
        boxShadow: 'none',
        a: {
          textDecoration: 'none',
        },
      }}
    >
      <Toolbar
        sx={{
          minHeight: {
            md: 84,
          },
          paddingX: {
            md: '4rem',
          },
        }}
      >
        <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
          <Box component="img" src={LOGO} sx={{ width: 36, height: 36, mr: 2 }} />
          <Typography variant="h4" sx={{ cursor: 'pointer' }}>
            BIXEL
          </Typography>
        </Box>

        <Box display="flex" flexGrow={1} />

        {isMobile ? (
          <IconButton edge="start" onClick={() => handleOpenSideBar()}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box display="flex" alignItems="center">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/gallery">Gallery</CustomLink>
            <CustomLink to="/mint">Mint</CustomLink>
            <CustomLink to="/marketplace">Marketplace</CustomLink>

            {isConnected && <CustomLink to="/profile">Profile</CustomLink>}

            <Box sx={{ ml: 2, display: 'inline' }}>
              <ConnectButton />
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
