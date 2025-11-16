// src/components/Card.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from './ToastProvider';
import deliveryIcon from '../assets/delivery.jpg';

function Card({ img, title, price, text, link, id }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const toast = useToast();

  // Extract numeric price from string (e.g., "$12.99" → 12.99)
  const numericPrice = parseFloat(price.replace('$', ''));

  // Handle card click - navigate to menu
  const handleCardClick = (e) => {
    // Don't navigate if clicking the order button
    if (e.target.closest('.order-link')) {
      return;
    }
    navigate('/menu');
  };

  // Handle "Order for Delivery" click
  const handleOrderClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Add to cart
    addToCart({
      id: id || title, // Use id if provided, fallback to title
      name: title,
      price: numericPrice,
      image: img,
      description: text,
    });

    toast.success(`${title} added to cart!`);
  };

  return (
    <article 
      className="card" 
      aria-labelledby={`card-${title.replace(/\s+/g, '-')}`}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <img src={img} alt={title} />
      <div className="card-body">
        <h3 id={`card-${title.replace(/\s+/g, '-')}`} className="card-title">
          <span>{title}</span>
          <span className="price">{price}</span>
        </h3>
        <p className="card-text">{text}</p>
        <button
          className="order-link"
          onClick={handleOrderClick}
          aria-label={`Add ${title} to cart`}
        >
          <span>Order for delivery</span>
          <img src={deliveryIcon} alt="" aria-hidden="true" className="delivery-icon" />
        </button>
      </div>
    </article>
  );
}

export default Card;