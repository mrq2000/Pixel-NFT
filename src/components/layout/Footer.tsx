import { Typography, Stack, Box, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ReactComponent as Discord } from 'assets/icons/discord.svg';
import { ReactComponent as Twitter } from 'assets/icons/twitter.svg';
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg';

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
          textAlign: 'center',
        }}
      >
        <Typography fontSize="1.5rem" sx={{ mb: { xs: 1.2, sm: 0 } }}>
          BIXEL
        </Typography>

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

          <a href="https://twitter.com/NftBixel" target="_blank">
            <Discord width="1.5rem" height="1.5rem" />
          </a>

          <a href="https://twitter.com/NftBixel" target="_blank">
            <Instagram width="1.5rem" height="1.5rem" />
          </a>
        </Stack>
      </Toolbar>
    </Box>
  );
};

export default Footer;
