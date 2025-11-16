import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const addToast = useCallback((message, type = 'info', duration = 5000) => {
    const id = Date.now();
    const toast = { id, message, type, duration };
    
    setToasts(prev => [...prev, toast]);

    // Auto-remove after duration
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  }, [removeToast]); // Fixed: Added removeToast dependency

  const toast = {
    success: (message, duration) => addToast(message, 'success', duration),
    error: (message, duration) => addToast(message, 'error', duration),
    info: (message, duration) => addToast(message, 'info', duration),
    warning: (message, duration) => addToast(message, 'warning', duration),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

function ToastContainer({ toasts, onRemove }) {
  if (toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      maxWidth: '400px'
    }}>
      {toasts.map(toast => (
        <Toast 
          key={toast.id} 
          toast={toast} 
          onRemove={() => onRemove(toast.id)} 
        />
      ))}
    </div>
  );
}

function Toast({ toast, onRemove }) {
  const { type, message } = toast;

  const styles = {
    success: {
      background: '#d4edda',
      color: '#155724',
      border: '1px solid #c3e6cb',
      icon: '✓'
    },
    error: {
      background: '#f8d7da',
      color: '#721c24',
      border: '1px solid #f5c6cb',
      icon: '✗'
    },
    warning: {
      background: '#fff3cd',
      color: '#856404',
      border: '1px solid #ffeaa7',
      icon: '⚠'
    },
    info: {
      background: '#d1ecf1',
      color: '#0c5460',
      border: '1px solid #bee5eb',
      icon: 'ℹ'
    }
  };

  const style = styles[type] || styles.info;

  return (
    <div
      role="alert"
      aria-live="polite"
      style={{
        background: style.background,
        color: style.color,
        border: style.border,
        borderRadius: '8px',
        padding: '16px 20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        animation: 'slideIn 0.3s ease',
        minWidth: '300px',
        maxWidth: '400px'
      }}
    >
      <span style={{ fontSize: '20px', flexShrink: 0 }}>
        {style.icon}
      </span>
      <span style={{ flex: 1, fontSize: '14px', lineHeight: '1.5' }}>
        {message}
      </span>
      <button
        onClick={onRemove}
        aria-label="Close notification"
        style={{
          background: 'transparent',
          border: 'none',
          color: style.color,
          fontSize: '20px',
          cursor: 'pointer',
          padding: '0 4px',
          lineHeight: '1',
          opacity: 0.7,
          transition: 'opacity 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.opacity = '1'}
        onMouseLeave={(e) => e.target.style.opacity = '0.7'}
      >
        ×
      </button>
      
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(400px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ToastProvider;