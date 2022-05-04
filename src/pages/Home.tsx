/* eslint-disable @typescript-eslint/ban-ts-comment */
import Countdown from 'react-countdown';
import Box from '@mui/material/Box';

const DATE_START_MINTING = 1653696000000;

const Home = () => {
  return (
    <Box display="flex" flex={1} alignItems="center" flexDirection="column">
      {
        // @ts-ignore
        <Countdown date={DATE_START_MINTING} />
      }
    </Box>
  );
};

export default Home;
