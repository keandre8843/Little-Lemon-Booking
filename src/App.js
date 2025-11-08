import React from 'react';
import './App.css';
import HeaderMain from './components/HeaderMain';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <HeaderMain />
        <Hero />
        <Specials />
         <Footer />
      </div>
  );
}

export default App;
