import React from 'react';
import heroImg from '../assets/restauranfood.jpg';

function Hero({img}) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 id="hero-heading" className="hero-title">
            Little Lemon
            <span className="city">Chicago</span>
          </h1>
          <p className="hero-copy">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className="btn btn-primary" aria-label="Reserve a table">
            Reserve a Table
          </button>
        </div>

        <div className="hero-right">
          <img className="hero-image" src={heroImg} alt="Chef holding prepared dishes" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
