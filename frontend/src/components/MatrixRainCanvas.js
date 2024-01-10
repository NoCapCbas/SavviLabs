import React, { useRef, useEffect } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set the canvas size to fill its container
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = Array(Math.floor(columns)).fill(1);

    // Function to render the matrix effect
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      rainDrops.forEach((y, index) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = index * fontSize;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[index] = 0;
        }
        rainDrops[index] = y + fontSize;
      });

      requestAnimationFrame(draw);
    };

    draw();

  }, []);

  return <canvas ref={canvasRef} />;
};

export default MatrixRain;
