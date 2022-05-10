import { Stage, Layer, Rect } from 'react-konva';

import { getColor, HEIGHT, WIDTH } from 'helpers/pixel';

interface IPixelImage {
  widthContainer: number;
  showBorder?: boolean;
}

const PixelImage = ({ widthContainer, showBorder = true }: IPixelImage) => {
  const data =
    'tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttuuuuuuuuuuuuuuuuuuutttttuyvvvvvvvvvvvvvvvvddutttuyvvvvvvvvvvvvvvvvvvvduttuvvuvvvuvuvuvvuvuuuuuduttuvyuuvuuvuvuuvuvvvuvvduttuvyuvuvuvuvuvuuvvvuvvduttuvyuvvvuvuvuvvuvvvuvvduttuvyuvvvuvuvuvvuvvvuvvduttuvvuvvvuvuvuvvuvvvuvvduttuyvuvvvuvuvuvvuvvvuvvdutttuyvvvvvvvvvvvvvvvvvdutttttuuuuuuuuuuuuuuuuuuuttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt';

  const renderDrawing = () => {
    const result = [];
    const pixelWidth = widthContainer / WIDTH;
    const heightWidth = (pixelWidth * HEIGHT) / WIDTH;

    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < WIDTH; j++) {
        const index = i * WIDTH + j;
        const defaultColor = getColor(data[index]);

        result.push(
          <Rect
            x={pixelWidth * j}
            y={heightWidth * i}
            width={pixelWidth}
            height={heightWidth}
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
    <Stage width={widthContainer} height={(widthContainer * HEIGHT) / WIDTH}>
      <Layer>{renderDrawing()}</Layer>
    </Stage>
  );
};

export default PixelImage;
