import { useState } from 'react';

import Box from '@mui/material/Box';

interface IPixel {
  selectedColor: string;
  defaultColor?: string;
  handleChangeColor: (color: string, index: number) => void;
  index: number;
  isShowBorder: boolean;
}

const Pixel = ({ selectedColor, defaultColor = '#fff', handleChangeColor, index, isShowBorder }: IPixel) => {
  const [pixelColor, setPixelColor] = useState<string>(defaultColor);
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  const applyColor = () => {
    setPixelColor(selectedColor);
    handleChangeColor(selectedColor, index);
    setCanChangeColor(false);
  };

  const changeColorOnHover = () => {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  };

  const resetColor = () => {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }

    setCanChangeColor(true);
  };

  return (
    <Box
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      sx={{
        backgroundColor: pixelColor,
        width: '100%',
        aspectRatio: '1/1',
        cursor: 'pointer',
        outline: isShowBorder ? '1px solid grey' : 'none',
      }}
    />
  );
};

export default Pixel;
