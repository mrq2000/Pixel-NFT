import Box from '@mui/material/Box';

interface IPixel {
  selectedColor: string;
  defaultColor?: string;
  handleChangeColor: (color: string, index: number) => void;
  index: number;
  isShowBorder: boolean;
}

const Pixel = ({ selectedColor, defaultColor = '#fff', handleChangeColor, index, isShowBorder }: IPixel) => {
  const applyColor = () => {
    handleChangeColor(selectedColor, index);
  };

  return (
    <Box
      onClick={applyColor}
      sx={{
        backgroundColor: defaultColor,
        width: '100%',
        aspectRatio: '1/1',
        cursor: 'pointer',
        outline: isShowBorder ? '1px solid grey' : 'none',
        '&:hover': {
          backgroundColor: selectedColor,
        },
      }}
    />
  );
};

export default Pixel;
