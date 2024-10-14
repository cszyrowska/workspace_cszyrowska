import React, { useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  useEffect(() => {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
      let currentIndex = 0;
      const images = slider.querySelectorAll('img');
      const totalImages = images.length;

      images.forEach(image => {
        image.addEventListener('click', () => {
          images[currentIndex].style.display = 'none';
          currentIndex = (currentIndex + 1) % totalImages;
          images[currentIndex].style.display = 'block';
        });
      });
    });
  }, []);

  return (
    <section id="EXPERIENCE" className="experience-section">
      <h2 className="section-title">My school Achievments</h2>
      <div className="experience-item">
        <div className="experience-content">
          <h3>Experience</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="experience-images slider">
          <img src="src/assets/random-photo1.png" alt="EPAS Image 1" />
          <img src="src/assets/random-photo2.png" alt="EPAS Image 2" style={{ display: 'none' }} />
          <img src="src/assets/random-photo3.png" alt="EPAS Image 3" style={{ display: 'none' }} />
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-content">
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="experience-images slider">
          <img src="src/assets/random-photo1.png" alt="Designing Image 1" />
          <img src="src/assets/random-photo2.png" alt="Designing Image 2" style={{ display: 'none' }} />
          <img src="src/assets/random-photo3.png" alt="Designing Image 3" style={{ display: 'none' }} />
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-content">
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="experience-images slider">
          <img src="src/assets/random-photo1.png" alt="Kenya Volunteering Image 1" />
          <img src="src/assets/random-photo2.png" alt="Kenya Volunteering Image 2" style={{ display: 'none' }} />
          <img src="src/assets/random-photo3.png" alt="Kenya Volunteering Image 3" style={{ display: 'none' }} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
