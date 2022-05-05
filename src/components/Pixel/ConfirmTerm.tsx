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
        <Box>Hello</Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmTerm;
