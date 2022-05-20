import { Typography, Stack, Box, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ReactComponent as Discord } from 'assets/icons/discord.svg';
import { ReactComponent as Twitter } from 'assets/icons/twitter.svg';
import tiktok from 'assets/icons/tiktok.png';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 5, mt: 12 }}
      flexDirection={{ xs: 'column', sm: 'row' }}
    >
      <Toolbar
        sx={{
          paddingX: {
            md: '5rem',
          },
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          alignItems: 'center',
        }}
      >
        <Stack direction="column" sx={{ mb: { xs: 2, sm: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography fontSize="1rem">Powered by CELO</Typography>

          <Box
            component="a"
            href="https://explorer.celo.org/address/0x69dA5A4C381f1AeDfF548b44e122Fd1A9E3924D0/read-contract"
            target="_blank"
            sx={{
              color: '#fff',
            }}
          >
            Contract
          </Box>

          <Typography variant="caption">Email: contact@bixel-nft.com</Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            a: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#E6E6E6',
              width: '2.4rem',
              height: '2.4rem',
              borderRadius: '50%',
              cursor: 'pointer',
              [theme.breakpoints.up('xs')]: {
                alignItems: 'center',
              },
            },
          }}
        >
          <a href="https://twitter.com/NftBixel" target="_blank">
            <Twitter width="1.5rem" height="1.5rem" />
          </a>

          <a href="https://discord.gg/c5qPBNpN" target="_blank">
            <Discord width="1.5rem" height="1.5rem" />
          </a>

          <a href="https://www.tiktok.com/@bixelnft" target="_blank">
            <img src={tiktok} />
          </a>
        </Stack>
      </Toolbar>
    </Box>
  );
};

export default Footer;
