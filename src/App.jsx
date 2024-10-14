import React from 'react';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import MeetMe from './components/MeetMe/MeetMe';
import './index.css'
import Contents from './components/Contents/Contents';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';


const App = () => {
  return (
    <div className="border-wrapper">
      <Hero />
      <Services/>
         <Contents />
   <MeetMe />
      <Experience />
      <Contact />



   
  </div>
  );
};

export default App;
