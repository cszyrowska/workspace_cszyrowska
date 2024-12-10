import React, { useRef, useState } from 'react';
import './Contents.css';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    imagePath: 'src/assets/SoftOceanPicture.png', // Ensure this path is correct
    link: 'https://softocean.net/', // This should be the correct link
  },
  {
    id: 2,
    title: 'Project 2',
    imagePath: '/assets/path_to_your_image2.jpg',
    link: 'https://link-to-project2.com',
  },
  {
    id: 3,
    title: 'Project 3',
    imagePath: '/assets/path_to_your_image3.jpg',
    link: 'https://link-to-project3.com',
  },
  
];


const Contents = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    const container = containerRef.current;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = containerRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed by multiplying movement
    container.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="section-container">
      <h2 className="section-title">My Projects</h2>
      <div
        className="contents-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {projects.map((project) => (
          <div key={project.id} className="polaroid">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imagePath}  // Direct path from the public folder
                alt={project.title}
                className="project-image"
              />
            </a>
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contents;
