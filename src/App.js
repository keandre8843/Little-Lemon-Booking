import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import HeaderMain from './components/HeaderMain';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { ToastProvider } from './components/ToastProvider';
import { CartProvider } from './context/CartContext';

const HomePage = lazy(() => import('./components/HomePage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const MenuPage = lazy(() => import('./components/MenuPage'));
const Main = lazy(() => import('./components/Main'));
const OrderOnlinePage = lazy(() => import('./components/OrderOnlinePage'));
const LoginPage = lazy(() => import('./components/LoginPage'));
const ConfirmedBooking = lazy(() => import('./components/ConfirmedBooking'));
const CartPage = lazy(() => import('./components/CartPage'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <CartProvider>
          <Router>
            <div className="App">
              <a href="#main-content" className="skip-link">
                Skip to main content
              </a>

              <HeaderMain />
              
              <main
                id="main-content"
                tabIndex="-1"
                role="main"
              >
                <ScrollToTop />
                
                <Suspense fallback={
                  <div className="loading-overlay">
                    <LoadingSpinner message="Loading page..." />
                  </div>
                }>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/booking" element={<Main />} />
                    <Route path="/reservations" element={<Main />} />
                    <Route path="/order-online" element={<OrderOnlinePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/confirmed" element={<ConfirmedBooking />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Suspense>
              </main>

              <Footer />
            </div>
          </Router>
        </CartProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;