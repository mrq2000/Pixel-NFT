import { useState } from 'react';

import Box from '@mui/material/Box';

import { CirclePicker } from 'react-color';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import DrawingPanel from 'components/Pixel/DrawingPanel';
import { getColors } from 'helpers/color';

const Pixel = () => {
  const [selectedColor, setSelectedColor] = useState('#fff');

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <DrawingPanel data="bcdefgh" selectedColor={selectedColor} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" flex={1} flexDirection="column" alignItems="center">
            <CirclePicker
              color={selectedColor}
              onChangeComplete={(color) => setSelectedColor(color.hex)}
              colors={getColors()}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pixel;
