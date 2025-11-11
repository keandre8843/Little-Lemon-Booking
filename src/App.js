import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderMain from './components/HeaderMain';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderMain />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
