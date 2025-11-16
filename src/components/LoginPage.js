import React, { useState } from 'react';
import SEO from './SEO';
import { Link } from 'react-router-dom';
import { useToast } from './ToastProvider';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info('Login functionality coming soon!');
  };

  return (
    <>
      <SEO 
        title="Login - Little Lemon Restaurant"
        description="Login to your Little Lemon account to manage reservations and orders."
      />
      
      <div className="login-page">
        <section className="login-container">
          <div className="login-box">
            <h1>Welcome Back</h1>
            <p className="login-subtitle">Login to your Little Lemon account</p>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Login
              </button>
            </form>

            <div className="login-footer">
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
              <p><Link to="/forgot-password">Forgot password?</Link></p>
            </div>

            <div className="login-divider">
              <span>or</span>
            </div>

            <div className="guest-actions">
              <Link to="/booking" className="btn btn-secondary" style={{ width: '100%' }}>
                Continue as Guest
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LoginPage;