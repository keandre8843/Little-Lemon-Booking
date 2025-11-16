import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logo from '../assets/littlelemonlogo.jpg';

function HeaderMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <div className="logo">
          <Link to="/" onClick={closeMenu} aria-label="Little Lemon Restaurant home">
            <img src={logo} alt="Little Lemon logo" />
          </Link>
        </div>

        <div className="cart-desktop">
          <Link 
            to="/cart" 
            className="cart-link"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav 
          id="primary-navigation"
          className={`nav-menu ${isMenuOpen ? 'active' : ''}`} 
          aria-label="Primary navigation"
        >
          <ul>
            <li>
              <Link 
                to="/" 
                onClick={closeMenu}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                onClick={closeMenu}
                aria-current={isActive('/about') ? 'page' : undefined}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/menu" 
                onClick={closeMenu}
                aria-current={isActive('/menu') ? 'page' : undefined}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                to="/booking" 
                onClick={closeMenu}
                aria-current={isActive('/booking') ? 'page' : undefined}
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link 
                to="/order-online" 
                onClick={closeMenu}
                aria-current={isActive('/order-online') ? 'page' : undefined}
              >
                Order Online
              </Link>
            </li>
            <li>
              <Link 
                to="/login" 
                onClick={closeMenu}
                aria-current={isActive('/login') ? 'page' : undefined}
              >
                Login
              </Link>
            </li>
            
            <li className="cart-nav-item-mobile">
              <Link 
                to="/cart" 
                onClick={closeMenu}
                aria-current={isActive('/cart') ? 'page' : undefined}
                className="cart-link"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <span className="cart-icon">🛒</span>
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>

        {isMenuOpen && (
          <div
            className="menu-overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}

export default HeaderMain;