import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/littlelemonlogo.jpg';

function NotFoundPage() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #EDEFEE 0%, #fff 100%)'
    }}>
      <div style={{ maxWidth: '600px', textAlign: 'center' }}>
        <div style={{
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <img 
            src={logo} 
            alt="Little Lemon" 
            style={{
              width: '200px',
              height: 'auto',
              opacity: 0.8
            }}
          />
        </div>
        
        <h1 style={{
          fontFamily: 'Markazi Text, serif',
          fontSize: '120px',
          color: '#F4CE14',
          margin: '0',
          lineHeight: '1',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          404
        </h1>
        
        <h2 style={{
          fontFamily: 'Markazi Text, serif',
          fontSize: '48px',
          color: '#495E57',
          margin: '16px 0'
        }}>
          Page Not Found
        </h2>
        
        <p style={{
          fontFamily: 'Karla, sans-serif',
          fontSize: '18px',
          color: '#666',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          Oops! Looks like this page got lost in the kitchen.
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          marginBottom: '48px',
          flexWrap: 'wrap'
        }}>
          <Link 
            to="/" 
            className="btn btn-primary"
          >
            Return to Home
          </Link>
          <Link 
            to="/booking" 
            className="btn btn-secondary"
          >
            Make a Reservation
          </Link>
        </div>

        <div style={{
          margin: '48px 0',
          padding: '32px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{
            fontFamily: 'Karla, sans-serif',
            fontSize: '20px',
            color: '#495E57',
            marginBottom: '20px'
          }}>
            Popular Pages
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '12px'
          }}>
            <li><Link to="/" style={{ color: '#333', textDecoration: 'none', fontWeight: '600' }}>Home</Link></li>
            <li><Link to="/menu" style={{ color: '#333', textDecoration: 'none', fontWeight: '600' }}>Menu</Link></li>
            <li><Link to="/booking" style={{ color: '#333', textDecoration: 'none', fontWeight: '600' }}>Reservations</Link></li>
            <li><Link to="/about" style={{ color: '#333', textDecoration: 'none', fontWeight: '600' }}>About</Link></li>
          </ul>
        </div>

        <div style={{ marginTop: '48px' }}>
          <p style={{ marginBottom: '16px', fontSize: '16px', color: '#666' }}>
            Need help finding something?
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="tel:+13125550123" 
              style={{ color: '#495E57', textDecoration: 'none', fontWeight: '600' }}
            >
              📞 (312) 555-0123
            </a>
            <a 
              href="mailto:info@littlelemon.com" 
              style={{ color: '#495E57', textDecoration: 'none', fontWeight: '600' }}
            >
              ✉️ info@littlelemon.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;