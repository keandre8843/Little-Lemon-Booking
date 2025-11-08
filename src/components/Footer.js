import React from 'react';
import image from '../assets/MarioandAdrian.jpg';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={image} alt="Mario and Adrian, the founders of Little Lemon Restaurant" />
        </div>
        <div className="footer-section">
          <h3>Doormat Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <address>
            <p>123 Main Street</p>
            <p>Chicago, Illinois 60601</p>
            <p>Tel: (312) 555-0123</p>
            <p>Email: info@littlelemon.com</p>
          </address>
        </div>

        <div className="footer-section">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://facebook.com/littlelemon">Facebook</a></li>
            <li><a href="https://instagram.com/littlelemon">Instagram</a></li>
            <li><a href="https://twitter.com/littlelemon">Twitter</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;