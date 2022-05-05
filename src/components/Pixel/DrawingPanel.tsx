import { useState, useRef } from 'react';
import { exportComponentAsJPEG } from 'react-component-export-image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import ImageIcon from '@mui/icons-material/Image';

import { getColor, HEIGHT, WIDTH } from 'helpers/pixel';
import Pixel from './Pixel';

const EXPORT_IMAGE_WIDTH = 450;

interface IDrawingPanel {
  data: string[];
  selectedColor: string;
  handleChangeColor: (newColor: string, index: number) => void;
}

const DrawingPanel = ({ data, selectedColor, handleChangeColor }: IDrawingPanel) => {
  const [isShowBorder, setIsShowBorder] = useState(true);

  const drawingPanelRef = useRef<any>();

  const renderDrawing = () => {
    const result = [];

    for (let i = 0; i < HEIGHT; i++) {
      const rows = [];
      const width = 100 / WIDTH;

      for (let j = 0; j < WIDTH; j++) {
        const index = i * WIDTH + j;
        const defaultColor = getColor(data[index]);

        rows.push(
          <Box sx={{ width: `${width}%` }} key={index}>
            <Pixel
              defaultColor={defaultColor}
              handleChangeColor={handleChangeColor}
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

      <Box mt={4} display="flex">
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
          variant="outlined"
          endIcon={<ImageIcon />}
        >
          Export
        </Button>
      </Box>
    </Box>
  );
};

export default DrawingPanel;
