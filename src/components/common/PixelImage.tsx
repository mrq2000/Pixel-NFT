import { Stage, Layer, Rect } from 'react-konva';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { getColor, HEIGHT, WIDTH } from 'helpers/pixel';
import { toast } from 'helpers/notify';

interface IPixelImage {
  widthContainer: number;
  showBorder?: boolean;
  code: string;
}

const PixelImage = ({ widthContainer, showBorder = true, code }: IPixelImage) => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    toast.success('Copy Code to Clipboard');
  };

  const renderDrawing = () => {
    const result = [];
    const pixelWidth = widthContainer / WIDTH;

    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < WIDTH; j++) {
        const index = i * WIDTH + j;
        const defaultColor = getColor(code[index]);

        result.push(
          <Rect
            x={pixelWidth * j}
            y={pixelWidth * i}
            width={pixelWidth}
            height={pixelWidth * HEIGHT}
            fill={defaultColor}
            strokeWidth={showBorder ? 0.2 : 0}
            stroke="black"
          />,
        );
      }
    }

    return result;
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Stage width={widthContainer} height={(widthContainer * HEIGHT) / WIDTH}>
        <Layer>{renderDrawing()}</Layer>
      </Stage>

      <Button variant="contained" sx={{ position: 'absolute', top: 8, right: 8 }} onClick={() => handleCopyCode()}>
        Copy Code
      </Button>
    </Box>
  );
};

export default PixelImage;
