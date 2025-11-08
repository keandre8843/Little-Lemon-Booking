import React from 'react';
import Card from './Card';
import dish1 from '../assets/greek salad.jpg';
import dish2 from '../assets/bruchetta.jpg';
import dish3 from '../assets/lemon dessert.jpg';

function Specials() {

  return (
    <section className="specials" aria-labelledby="specials-heading">
      <div className="specials-header">
        <h2 id="specials-heading">This weeks specials!</h2>
        <button 
          className="btn btn-secondary"
          aria-label="View online menu"
        >
          Online Menu
        </button>
      </div>

      <div className="cards">
        <Card
          img={dish1}
          title="Greek salad"
          price="$12.99"
          text="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." 
          link="/order"
        />
        <Card
          img={dish2}
          title="Bruschetta"
          price="$5.99"
          text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." 
          link="/order"
        />
        <Card
          img={dish3}
          title="Lemon Dessert"
          price="$5.00"
          text="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." 
          link="/order"
        />
      </div>
    </section>
  );
}

export default Specials;
