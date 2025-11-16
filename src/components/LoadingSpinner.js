import React from 'react';

function LoadingSpinner({ message = "Loading..." }) {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        minHeight: '200px'
      }}
      role="status" 
      aria-live="polite"
    >
      <div 
        style={{
          width: '50px',
          height: '50px',
          border: '4px solid #EDEFEE',
          borderTop: '4px solid #F4CE14',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}
      />
      <p style={{
        marginTop: '16px',
        fontFamily: 'Karla, sans-serif',
        fontSize: '16px',
        color: '#333',
        fontWeight: '500'
      }}>
        {message}
      </p>
      
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default LoadingSpinner;