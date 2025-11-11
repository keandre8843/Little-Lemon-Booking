import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Chicago from './Chicago';

function HomePage() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <Chicago />
    </main>
  );
}

export default HomePage;