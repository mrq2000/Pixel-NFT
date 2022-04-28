import React, { useRef } from 'react';
import { useEffect } from 'react-is/node_modules/@types/react';

const Pixel = () => {
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;

  useEffect(() => {
    if (canvas) {
      const context = canvas.getContext('2d');
    }
  }, [canvas]);

  return <canvas ref={canvasRef} />;
};

export default Pixel;
