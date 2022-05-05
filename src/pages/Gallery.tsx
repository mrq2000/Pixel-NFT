/* eslint-disable @typescript-eslint/ban-ts-comment */
import Countdown from 'react-countdown';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { TIME_START_MINT } from 'constant';

const Gallery = () => {
  return (
    <Box display="flex" flex={1} alignItems="center" flexDirection="column" mt={8} justifyContent="center">
      <Typography variant="h1" textAlign="center" sx={{ mb: 4 }}>
        COMING SOON!
      </Typography>

      <Typography variant="h3" textAlign="center" sx={{ mb: 2 }}>
        {
          // @ts-ignore
          <Countdown date={TIME_START_MINT} />
        }
      </Typography>
    </Box>
  );
};

export default Gallery;
