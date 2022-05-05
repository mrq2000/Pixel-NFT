/* eslint-disable @typescript-eslint/ban-ts-comment */
import Countdown from 'react-countdown';
import LoadingButton from '@mui/lab/LoadingButton';
import { TIME_START_MINT } from 'constant';

interface IMintButton {
  handleChangeData: (newData: string) => void;
}

const MintButton = () => {
  return (
    <LoadingButton variant="contained" size="large" disabled sx={{ flexDirection: 'column', height: 'auto' }}>
      <div>Mint</div>
      {
        // @ts-ignore
        <Countdown date={TIME_START_MINT} />
      }
    </LoadingButton>
  );
};

export default MintButton;
