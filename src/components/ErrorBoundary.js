import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });
  }

  handleReset = () => {
    this.setState({ 
      hasError: false,
      error: null,
      errorInfo: null
    });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }}>
          <div style={{
            maxWidth: '600px',
            background: 'white',
            borderRadius: '16px',
            padding: '48px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '24px' }}>⚠️</div>
            <h1 style={{ fontSize: '36px', color: '#495E57', marginBottom: '16px' }}>
              Oops! Something went wrong
            </h1>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '32px', lineHeight: '1.6' }}>
              We're sorry, but something unexpected happened. Our team has been notified.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '32px' }}>
              <button 
                onClick={this.handleReset}
                style={{
                  background: '#F4CE14',
                  color: '#333',
                  border: 'none',
                  padding: '14px 28px',
                  borderRadius: '16px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Return to Home
              </button>
              <button 
                onClick={() => window.location.reload()}
                style={{
                  background: '#495E57',
                  color: 'white',
                  border: 'none',
                  padding: '14px 28px',
                  borderRadius: '16px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Reload Page
              </button>
            </div>

            <div style={{ paddingTop: '32px', borderTop: '1px solid #e0e0e0' }}>
              <p style={{ marginBottom: '16px', color: '#666' }}>Need immediate assistance?</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <a 
                  href="tel:+13125550123" 
                  style={{ color: '#495E57', textDecoration: 'none', fontWeight: '600' }}
                >
                  📞 Call us
                </a>
                <a 
                  href="mailto:support@littlelemon.com" 
                  style={{ color: '#495E57', textDecoration: 'none', fontWeight: '600' }}
                >
                  ✉️ Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;