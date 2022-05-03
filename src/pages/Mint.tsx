import { useState } from 'react';
import { CirclePicker } from 'react-color';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import DrawingPanel from 'components/Pixel/DrawingPanel';
import { getColors, DEFAULT_DATA, getKey } from 'helpers/pixel';
import ImportCodeBtn from 'components/Pixel/ImportCodeBtn';
import { toast } from 'helpers/notify';

const Mint = () => {
  const colors = getColors();
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [pixelData, setPixelData] = useState(DEFAULT_DATA.split(''));

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
              <Button variant="contained" sx={{ mr: 2 }} onClick={handleCopyCode}>
                Copy Code
              </Button>
              <ImportCodeBtn handleChangeData={handleImportData} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mint;
