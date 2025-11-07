import React from 'react';
import logo from '../../little-lemon-logo.jpg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <h1>My App</h1>
    </header>
  );
}

export default Header;