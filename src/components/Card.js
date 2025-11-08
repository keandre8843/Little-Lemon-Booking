import React from 'react';
import deliveryIcon from '../assets/delivery.jpg';

function Card({ img, title, price, text, link }) {
  return (
    <article className="card" aria-labelledby={`card-${title.replace(/\s+/g, '-')}`}>
      <img src={img} alt={title} />
      <div className="card-body">
        <h3 id={`card-${title.replace(/\s+/g, '-')}`} className="card-title">
          <span>{title}</span>
          <span className="price">{price}</span>
        </h3>
        <p className="card-text">{text}</p>
        <a className="order-link" href={link} aria-label={`Order ${title} for delivery`}>
          <span>Order for delivery</span>
          <img src={deliveryIcon} alt="" aria-hidden="true" className="delivery-icon" />
          </a>
      </div>
    </article>
  );
}

export default Card;
