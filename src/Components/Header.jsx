import React, { useState } from 'react';
import './Header.css';
import Image1 from "../assets/Screenshot (51).png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
      setMenuOpen(false); // Close menu on mobile after click
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Image1} alt="Logo" />
      </div>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a onClick={() => handleScroll('features')}>Features</a>
        <a onClick={() => handleScroll('pricing')}>Pricing</a>
        <a onClick={() => handleScroll('community')}>Community</a>
        <a onClick={() => handleScroll('support')}>Support</a>
      </nav>
      <div className={`auth-buttons ${menuOpen ? 'open' : ''}`}>
        <a href="/login"><button className="login-btn">Login</button></a>
        <a href="/signup"><button className="register-btn">Register</button></a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? (
          <span className="close-icon">&times;</span>
        ) : (
          <>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
