import React, { useState } from 'react';
import '../assets/css/NewNavbar.css';
import { Link } from 'react-router-dom';

const NewNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="navbar d-block d-lg-none">
      <div className="nav-content">
        <div className={`hamburger-menu ${isNavOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav-links ${isNavOpen ? 'show' : ''}`}>
          <ul>
            <li><Link to="/" onClick={()=>{toggleNavbar(); scrollToTop();}}>Home</Link></li>
            <li><Link to={`/solutions/${encodeURIComponent("Web Development")}`} onClick={()=>{toggleNavbar(); scrollToTop();}}>Our Solutions</Link></li>
            <li><Link to="/about" onClick={()=>{toggleNavbar(); scrollToTop();}}>About</Link></li>
            <li><Link to="/career" onClick={()=>{toggleNavbar(); scrollToTop();}}>Career</Link></li>
            <li><Link to="/contact" onClick={()=>{toggleNavbar(); scrollToTop();}}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default NewNavbar;