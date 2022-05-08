import { useState } from 'react';
import { CirclePicker } from 'react-color';
import { useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

import DrawingPanel from 'components/Pixel/DrawingPanel';
import { getColors, DEFAULT_DATA, getKey } from 'helpers/pixel';
import ImportCodeBtn from 'components/Pixel/ImportCodeBtn';
import { toast } from 'helpers/notify';
import MintButton from 'components/Pixel/MintButton';
import ConfirmTerm from 'components/Pixel/ConfirmTerm';

interface IMintForm {
  name: string;
}

const Mint = () => {
  const colors = getColors();
  const [selectedColor, setSelectedColor] = useState(colors[colors.length - 1]);
  const [pixelData, setPixelData] = useState(DEFAULT_DATA.split(''));
  const [isReadTerm, setIsReadTerm] = useState(false);
  const [isOpenTerm, setIsOpenTerm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMintForm>({
    mode: 'onSubmit',
  });

  const handleChangeColor = (newColor: string, index: number) => {
    const newChar = getKey(newColor);

    if (newChar && newChar.length == 1) {
      const newData = [...pixelData];
      newData[index] = newChar;
      setPixelData(newData);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(pixelData.join(''));
    toast.success('Copy Code to Clipboard');
  };

  const handleImportData = (newData: string) => {
    setPixelData(newData.split(''));
  };

  return (
    <Container>
      <ConfirmTerm open={isOpenTerm} handleClose={() => setIsOpenTerm(false)} />

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <DrawingPanel data={pixelData} handleChangeColor={handleChangeColor} selectedColor={selectedColor} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" flex={1} flexDirection="column" alignItems="center">
            <CirclePicker
              color={selectedColor}
              onChangeComplete={(color) => setSelectedColor(color.hex)}
              colors={colors}
            />

            <TextField
              sx={{ mt: 4, width: '80%' }}
              multiline
              disabled
              label="Code"
              value={pixelData.join('')}
              maxRows={4}
            />

            <Box mt={2}>
              <Button
                variant="outlined"
                sx={{ mr: 2, fontSize: { xs: '0.8rem', md: 'inherit' } }}
                onClick={handleCopyCode}
              >
                Copy Code
              </Button>
              <ImportCodeBtn handleChangeData={handleImportData} />
            </Box>

            <Box mt={4} maxWidth={400}>
              <TextField
                sx={{ flex: 1, mr: 2 }}
                required
                label="Name"
                multiline
                maxRows={3}
                fullWidth
                inputProps={{
                  ...register('name', {
                    required: { value: true, message: 'Name is required!' },
                  }),
                }}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : null}
              />
            </Box>

            <Box display="flex" alignItems="center" mt={10} sx={{ fontSize: '0.8rem' }}>
              <Checkbox checked={isReadTerm} onClick={() => setIsReadTerm(!isReadTerm)} />I read the&nbsp;
              <Box
                component="span"
                sx={{ textDecoration: 'underline', color: (theme) => theme.palette.primary.main, cursor: 'pointer' }}
                onClick={() => setIsOpenTerm(true)}
              >
                term
              </Box>
              &nbsp;of service
            </Box>
            <Box mt={2}>
              <MintButton />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mint;
