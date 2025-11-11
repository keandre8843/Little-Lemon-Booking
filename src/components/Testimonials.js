import React from 'react';
import customer1 from '../assets/Sarah.jpg';
import customer2 from '../assets/Michael.png';
import customer3 from '../assets/Emily.png';
import customer4 from '../assets/DavidThompson.png';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: customer1,
      rating: 5,
      review: "The best Mediterranean food in Chicago! The atmosphere is cozy and the staff is incredibly friendly."
    },
    {
      id: 2,
      name: "Michael Chen",
      image: customer2,
      rating: 5,
      review: "Amazing experience! The lemon dessert is to die for. Will definitely be coming back with family."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      image: customer3,
      rating: 4,
      review: "Great food and wonderful service. The Greek salad was fresh and delicious. Highly recommend!"
    },
    {
      id: 4,
      name: "David Thompson",
      image: customer4,
      rating: 5,
      review: "Little Lemon never disappoints! Their bruschetta is the perfect starter. A must-visit restaurant."
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < rating ? "star filled" : "star"}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials-inner">
        <h2 id="testimonials-heading">What our customers say!</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card">
              <StarRating rating={testimonial.rating} />
              
              <div className="testimonial-customer">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name}`}
                  className="customer-image"
                />
                <h3 className="customer-name">{testimonial.name}</h3>
              </div>
              
              <p className="testimonial-review">"{testimonial.review}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;