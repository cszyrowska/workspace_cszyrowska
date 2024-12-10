import React, { useRef, useState } from 'react';
import './Contents.css';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    imagePath: 'src/assets/SoftOceanPicture.png', // Using relative path from public folder
    link: 'https://softocean.net/',
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
  {
    id: 4,
    title: 'Project 4',
    imagePath: '/assets/path_to_your_image4.jpg',
    link: 'https://link-to-project4.com',
  },
  {
    id: 5,
    title: 'Project 5',
    imagePath: '/assets/path_to_your_image5.jpg',
    link: 'https://link-to-project5.com',
  },
  {
    id: 6,
    title: 'Project 6',
    imagePath: '/assets/path_to_your_image6.jpg',
    link: 'https://link-to-project6.com',
  },
  {
    id: 7,
    title: 'Project 7',
    imagePath: '/assets/path_to_your_image7.jpg',
    link: 'https://link-to-project7.com',
  },
  {
    id: 8,
    title: 'Project 8',
    imagePath: '/assets/path_to_your_image8.jpg',
    link: 'https://link-to-project8.com',
  },
  {
    id: 9,
    title: 'Project 9',
    imagePath: '/assets/path_to_your_image9.jpg',
    link: 'https://link-to-project9.com',
  },
  {
    id: 10,
    title: 'Project 10',
    imagePath: '/assets/path_to_your_image10.jpg',
    link: 'https://link-to-project10.com',
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
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => console.log(`Link clicked: ${project.link}`)} // Debugging click events
            >
              <img
                src={project.imagePath}
                alt={project.title}
                className="project-image"
                onError={(e) => {
                  console.error(`Image failed to load: ${project.imagePath}`);
                  e.target.src = '/assets/default_image.jpg'; // Fallback image on error
                }}
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
