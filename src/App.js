import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderMain from './components/HeaderMain';
import HomePage from './components/HomePage';
import Main from './components/Main';
import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderMain />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<Main />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;