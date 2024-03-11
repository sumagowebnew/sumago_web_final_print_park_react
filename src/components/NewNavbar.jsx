import React, { useState } from 'react';
import '../Assets/CSS/Navbar.css'; // Import the CSS file for styling

const NewNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-content">
        <div className={`hamburger-menu ${isNavOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav-links ${isNavOpen ? 'show' : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewNavbar;