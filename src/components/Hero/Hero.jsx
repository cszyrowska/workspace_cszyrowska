import React, { useEffect } from 'react';
import './Hero.css';
import img1 from '../../assets/Untitled15_20240904163742.png';

const Hero = () => {
  useEffect(() => {
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const images = [img1];
    const numImages = 30;
    const items = [];

    for (let i = 0; i < numImages; i++) {
      const img = new Image();
      img.src = images[Math.floor(Math.random() * images.length)];
      const size = Math.random() * 400 + 200;
      items.push({
        img,
        x: Math.random() * width,
        y: Math.random() * height,
        width: size,
        height: size,
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 2 + 1
      });
    }

    const drawImages = () => {
      ctx.clearRect(0, 0, width, height);

      items.forEach(item => {
        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.angle);
        ctx.drawImage(item.img, -item.width / 2, -item.height / 2, item.width, item.height);
        ctx.restore();

        item.x += Math.cos(item.angle) * item.speed;
        item.y += Math.sin(item.angle) * item.speed;

        if (item.x - item.width > width) item.x = -item.width;
        if (item.x + item.width < 0) item.x = width + item.width;
        if (item.y - item.height > height) item.y = -item.height;
        if (item.y + item.height < 0) item.y = height + item.height;
      });

      requestAnimationFrame(drawImages);
    };

    drawImages();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <div className='hero'>
      <canvas id='backgroundCanvas'></canvas>
      <div className="hero-text">
        <h1>Media Design</h1>
        <p>Hi, I'm Cecylia! And I specialise in front-end designing.</p>
      </div>
    </div>
  );
};

export default Hero;
