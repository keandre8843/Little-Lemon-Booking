import React from 'react';
import restaurantImage from '../assets/restaurant.jpg';
import chefImage from '../assets/restaurant chef B.jpg';

function Chicago() {
  return (
    <section className="about-section" aria-labelledby="about-heading">
      <div className="about-inner">
        <div className="about-content">
          <h2 id="about-heading" className="about-title">
            Little Lemon
            <span className="about-subtitle">Chicago</span>
          </h2>
          
          <p className="about-text">
            Little Lemon is a charming neighborhood bistro that serves simple food 
            and classic cocktails in a lively but casual environment. The restaurant 
            features a locally-sourced menu with daily specials.
          </p>
        </div>

        <div className="about-images">
          <img 
            src={restaurantImage} 
            alt="Little Lemon restaurant interior" 
            className="about-image about-image-main"
          />
          <img 
            src={chefImage} 
            alt="Little Lemon chefs Adrian and Mario" 
            className="about-image about-image-overlay"
          />
        </div>
      </div>
    </section>
  );
}

export default Chicago;