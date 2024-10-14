import React from 'react';
import './Contact.css';
import { FaYoutube, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'; // Importing icons from react-icons

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Get in Touch</h2>
      <div className="social-icons">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon youtube">
          <FaYoutube />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin">
          <FaLinkedin />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Contact;
