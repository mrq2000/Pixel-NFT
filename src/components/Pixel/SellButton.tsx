/* eslint-disable @typescript-eslint/ban-ts-comment */
import Countdown from 'react-countdown';
import LoadingButton from '@mui/lab/LoadingButton';
import { TIME_START_MARKET } from 'constant';

const SellButton = () => {
  return (
    <LoadingButton
      variant="contained"
      size="large"
      disabled
      sx={{ flexDirection: 'column', height: 'auto', width: '100%' }}
    >
      <div>Sell Now</div>
      {
        // @ts-ignore
        <Countdown date={TIME_START_MARKET} />
      }
    </LoadingButton>
  );
};

export default SellButton;
