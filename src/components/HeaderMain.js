import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/littlelemonlogo.jpg';

function HeaderMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <div className="logo">
          <img src={logo} alt="Little Lemon logo" />
        </div>

        <button 
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} aria-label="Primary navigation">
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
            <li><Link to="/booking" onClick={toggleMenu}>Reservations</Link></li>
            <li><Link to="/order-online" onClick={toggleMenu}>Order Online</Link></li>
            <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderMain;
