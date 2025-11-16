// src/components/MenuItem.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from './ToastProvider';

function MenuItem({ item }) {
  const { name, price, description, image, dietary, popular } = item;
  const { addToCart } = useCart();
  const toast = useToast();

  const dietaryIcons = {
    vegetarian: { icon: '🌱', label: 'Vegetarian' },
    vegan: { icon: '🥬', label: 'Vegan' },
    'gluten-free': { icon: '🌾', label: 'Gluten Free' }
  };

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${name} added to cart!`);
  };

  return (
    <article 
      className="menu-item"
      onClick={handleAddToCart}
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex="0"
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleAddToCart();
        }
      }}
      aria-label={`Add ${name} to cart - $${price.toFixed(2)}`}
    >
      {popular && (
        <div className="popular-badge">
          <span>⭐ Popular</span>
        </div>
      )}
      
      <div className="menu-item-image-container">
        <img 
          src={image} 
          alt={name}
          className="menu-item-image"
          loading="lazy"
        />
      </div>

      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-title">{name}</h3>
          <span className="menu-item-price">${price.toFixed(2)}</span>
        </div>

        <p className="menu-item-description">{description}</p>

        {dietary && dietary.length > 0 && (
          <div className="menu-item-dietary">
            {dietary.map(diet => (
              <span 
                key={diet} 
                className="dietary-badge"
                title={dietaryIcons[diet]?.label}
              >
                {dietaryIcons[diet]?.icon} {dietaryIcons[diet]?.label}
              </span>
            ))}
          </div>
        )}

        <button 
          className="menu-item-order-btn"
          onClick={handleAddToCart}
          aria-label={`Add ${name} to cart`}
        >
          Add to Order
        </button>
      </div>
    </article>
  );
}

export default MenuItem;