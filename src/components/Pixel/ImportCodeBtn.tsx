import { useState } from 'react';
import { useForm } from 'react-hook-form';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { HEIGHT, WIDTH } from 'helpers/pixel';

interface IImportCodeForm {
  data: string;
}

interface IImportCodeBtn {
  handleChangeData: (newData: string) => void;
}
const ImportCodeBtn = ({ handleChangeData }: IImportCodeBtn) => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<IImportCodeForm>({
    mode: 'onSubmit',
  });

  const handleClose = () => {
    setOpen(false);
    setValue('data', '');
  };

  const handleImport = ({ data }: IImportCodeForm) => {
    if (data.length != HEIGHT * WIDTH) {
      setError('data', {
        type: 'wrong type',
        message: 'Code is not in the right format',
      });
    } else {
      handleChangeData(data);
      handleClose();
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth disableEscapeKeyDown maxWidth="sm">
        <DialogTitle sx={{ m: 0, p: 4 }}>
          <Box flex={1} textAlign="center">
            Import Your Code For Drawing
          </Box>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <TextField
            required
            label="Code"
            fullWidth
            autoFocus
            multiline
            maxRows={6}
            inputProps={{ min: 0, ...register('data') }}
            error={!!errors.data}
            helperText={errors.data && errors.data.message}
            sx={{ my: 2 }}
          />
        </DialogContent>

        <DialogActions sx={{ mb: 2 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit(handleImport)}>
            Import
          </Button>
        </DialogActions>
      </Dialog>

      <Button variant="outlined" onClick={() => setOpen(true)} sx={{ fontSize: { xs: '0.8rem', md: 'inherit' } }}>
        Import Code
      </Button>
    </>
  );
};

export default ImportCodeBtn;
