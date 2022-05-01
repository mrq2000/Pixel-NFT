import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';

import ConnectButton from './ConnectButton';
import useWeb3Store from 'stores/useWeb3Store';

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
        backgroundColor: (theme: Theme) => `${theme.palette.background.default}40`,
        color: (theme: Theme) => theme.palette.primary.main,
        backdropFilter: 'blur(6px)',
        boxShadow: 'none',
      }}
    >
      <Container disableGutters>
        <Toolbar>
          <Box component="a" href="/">
            <Typography variant="h4" sx={{ cursor: 'pointer', fontFamily: 'Roboto' }}>
              NFT
            </Typography>
          </Box>

          <Box display="flex" flexGrow={1} />

          {isMobile ? (
            <IconButton edge="start" onClick={() => handleOpenSideBar()}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box display="flex" alignItems="center">
              <Link to="/">
                <MuiLink
                  variant="h6"
                  sx={{
                    mr: 3,
                    ml: 1,
                    textDecoration: 'none',
                    ':hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Home
                </MuiLink>
              </Link>

              {isConnected && (
                <Link to="/">
                  <MuiLink
                    variant="h6"
                    sx={{
                      mr: 3,
                      ml: 1,
                      textDecoration: 'none',
                      ':hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Profile
                  </MuiLink>
                </Link>
              )}

              <Box sx={{ ml: 2, display: 'inline' }}>
                <ConnectButton />
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
