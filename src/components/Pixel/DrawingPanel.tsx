import { useState, useRef } from 'react';
import { exportComponentAsJPEG } from 'react-component-export-image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import { getColor } from 'helpers/color';
import Pixel from './Pixel';

const HEIGHT = 21;
const WIDTH = 17;
const EXPORT_IMAGE_WIDTH = 450;

interface IDrawingPanel {
  data: string;
  selectedColor: string;
}

const DrawingPanel = ({ data, selectedColor }: IDrawingPanel) => {
  const [pixelData, setPixelData] = useState(data.split(''));
  const [isShowBorder, setIsShowBorder] = useState(false);

  const drawingPanelRef = useRef<any>();

  const handleChangeData = (newChar: string, index: number) => {
    if (newChar.length == 1) {
      const newData = [...pixelData];
      newData[index] = newChar;
      setPixelData(newData);
    }
  };

  const renderDrawing = () => {
    const result = [];

    for (let i = 0; i < HEIGHT; i++) {
      const rows = [];
      const width = 100 / WIDTH;

      for (let j = 0; j < WIDTH; j++) {
        const index = i * HEIGHT + j;
        const defaultColor = getColor(pixelData[index]);

        rows.push(
          <Box sx={{ width: `${width}%` }} key={index}>
            <Pixel
              defaultColor={defaultColor}
              handleChangeColor={handleChangeData}
              selectedColor={selectedColor}
              index={index}
              isShowBorder={isShowBorder}
            />
          </Box>,
        );
      }

      result.push(
        <Box key={i} display="flex">
          {rows}
        </Box>,
      );
    }

    return result;
  };

  return (
    <Box display="flex" width="100%" flexDirection="column" alignItems="center">
      <Box sx={{ width: '100%' }} ref={drawingPanelRef}>
        {renderDrawing()}
      </Box>

      <Box mt={2}>
        <FormControlLabel
          control={<Switch checked={isShowBorder} onChange={() => setIsShowBorder(!isShowBorder)} color="primary" />}
          label="Show border"
        />
        <Button
          onClick={() => {
            if (drawingPanelRef) {
              drawingPanelRef.current.style.width = `${EXPORT_IMAGE_WIDTH}px`;
              exportComponentAsJPEG(drawingPanelRef, { fileName: 'Pixel NFT' });
              drawingPanelRef.current.style.width = '100%';
            }
          }}
          variant="contained"
        >
          Export as Image
        </Button>
      </Box>
    </Box>
  );
};

export default DrawingPanel;
