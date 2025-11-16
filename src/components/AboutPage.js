import React from 'react';
import SEO from './SEO';
import Chicago from './Chicago';

function AboutPage() {
  return (
    <>
      <SEO 
        title="About Us - Little Lemon Restaurant"
        description="Learn about Little Lemon, a family-owned Mediterranean restaurant in Chicago serving authentic recipes with a modern twist."
        image="/assets/restaurant.jpg"
      />
      
      <div className="about-page">
        <section className="page-header">
          <div className="page-header-content">
            <h1>About Little Lemon</h1>
            <p className="page-subtitle">
              A family tradition of Mediterranean excellence
            </p>
          </div>
        </section>

        <Chicago />

        <section className="our-story">
          <div className="story-inner">
            <h2>Our Story</h2>
            <p>
              Founded in 1995 by brothers Adrian and Mario, Little Lemon has been 
              serving authentic Mediterranean cuisine to the Chicago community for 
              nearly three decades. What started as a small family kitchen has grown 
              into a beloved neighborhood gathering place.
            </p>
            <p>
              We believe in using only the finest locally-sourced ingredients, 
              traditional cooking methods, and recipes passed down through generations. 
              Every dish tells a story of our heritage and our commitment to quality.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutPage;