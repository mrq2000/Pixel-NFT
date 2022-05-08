/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  // @ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IConfirmTermProps extends DialogProps {
  open: boolean;
  handleClose: () => void;
}

const ConfirmTerm = ({ open, handleClose, ...props }: IConfirmTermProps) => {
  return (
    <Dialog
      {...props}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ textAlign: 'center' }}>Term</DialogTitle>

      <DialogContent>
        <Box>
          1. NFT with coarse or slate name will not be allowed. You should avoid sensitive keyword on naming NFT too !
        </Box>
        <Box mt={3}>
          2. The picture the same as an existed NFT will be disqualified from our "The Best PIXEL" contest. However,
          those still can be traded on our marketplace
        </Box>

        <Box mt={3}>
          3. If we find any NFT or any work of user that violate our term and service, we will prohibit that on our
          market
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmTerm;
