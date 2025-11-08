import React, { useState } from 'react';
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
            <li><a href="/" onClick={toggleMenu}>Home</a></li>
            <li><a href="/about" onClick={toggleMenu}>About</a></li>
            <li><a href="/menu" onClick={toggleMenu}>Menu</a></li>
            <li><a href="/reservations" onClick={toggleMenu}>Reservations</a></li>
            <li><a href="/order-online" onClick={toggleMenu}>Order Online</a></li>
            <li><a href="/login" onClick={toggleMenu}>Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderMain;