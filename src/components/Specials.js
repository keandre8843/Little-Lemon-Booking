// src/components/Specials.js
import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import dish1 from '../assets/greek salad.jpg';
import dish2 from '../assets/bruchetta.jpg';
import dish3 from '../assets/lemon dessert.jpg';

function Specials() {
  return (
    <section className="specials" aria-labelledby="specials-heading">
      <div className="specials-inner">
        <div className="specials-header">
          <h2 id="specials-heading">This weeks specials!</h2>
          
          <Link 
            to="/menu" 
            className="btn btn-secondary"
            aria-label="View full online menu"
          >
            Online Menu
          </Link>
        </div>

        <div className="cards">
          <Card
            id={1} // ← Add ID
            img={dish1}
            title="Greek salad"
            price="$12.99"
            text="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." 
            link="/menu"
          />
          <Card
            id={2} // ← Add ID
            img={dish2}
            title="Bruschetta"
            price="$5.99"
            text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." 
            link="/menu"
          />
          <Card
            id={3} // ← Add ID
            img={dish3}
            title="Lemon Dessert"
            price="$5.00"
            text="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." 
            link="/menu"
          />
        </div>
      </div>
    </section>
  );
}

export default Specials;