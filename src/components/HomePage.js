import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Chicago from './Chicago';
import SEO from './SEO';

function HomePage() {
  return (
    <>
      <SEO 
        title="Little Lemon - Mediterranean Restaurant in Chicago"
        description="Little Lemon is a charming neighborhood bistro serving authentic Mediterranean cuisine with a modern twist. Family-owned restaurant in Chicago featuring locally-sourced ingredients and traditional recipes."
        image="/assets/restauranfood.jpg"
        type="website"
      />
      
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <Chicago />
      </main>
    </>
  );
}

export default HomePage;