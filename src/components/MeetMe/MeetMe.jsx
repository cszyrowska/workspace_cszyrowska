import React from 'react';
import './MeetMe.css';

const MeetMe = () => {
  return (
    <div className="MeetMe">
      <div className="MeetMe-header">
        <h2>Meet Me</h2>
      </div>
      <div className="MeetMe-grid">
        <div className="MeetMe-item MeetMe-photo">
          <div className="photo-frame">
            <img src="src/assets/random-photo1.png" alt="Your Name" className="photo" />
          </div>
          <h3 className="your-name">Cecylia Szyrowska</h3>
        </div>
        <div className="MeetMe-item MeetMe-hobby">
          <h3>Traveling</h3>
          <p>
            Traveling is my passion. I love exploring new places, learning
            about different cultures, and experiencing the beauty of the
            world. Whether it's hiking in the mountains or strolling
            through a bustling city, I'm always seeking new adventures.
          </p>
          <img
            src="src/assets/random-photo2.png"
            alt="Traveling"
            className="hobby-photo"
          />
        </div>
        <div className="MeetMe-item MeetMe-hobby">
          <h3>Dance/Movement</h3>
          <p>
            Dance is my way of expressing myself. Through movement, I
            connect with my emotions and find joy in the rhythm and flow.
            Whether it's a structured dance class or freestyle movement,
            dancing is where I feel most alive.
          </p>
          <img
            src="src/assets/random-photo1.png"
            alt="Dancing"
            className="hobby-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default MeetMe;
