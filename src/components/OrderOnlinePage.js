import React from 'react';
import SEO from './SEO';
import { Link } from 'react-router-dom';

function OrderOnlinePage() {
  return (
    <>
      <SEO 
        title="Order Online - Little Lemon Restaurant"
        description="Order authentic Mediterranean cuisine online from Little Lemon for pickup or delivery in Chicago."
      />
      
      <div className="order-online-page">
        <section className="page-header">
          <div className="page-header-content">
            <h1>Order Online</h1>
            <p className="page-subtitle">
              Fresh Mediterranean cuisine delivered to your door
            </p>
          </div>
        </section>

        <section className="coming-soon">
          <div className="coming-soon-inner">
            <div className="coming-soon-icon">🚀</div>
            <h2>Coming Soon!</h2>
            <p>
              We're working on bringing our delicious Mediterranean cuisine directly 
              to your home. Online ordering will be available soon.
            </p>
            <p>
              In the meantime, you can call us to place a takeout order or visit us 
              in person.
            </p>
            
            <div className="cta-buttons">
              <a href="tel:+13125550123" className="btn btn-primary">
                📞 Call to Order: (312) 555-0123
              </a>
              <Link to="/menu" className="btn btn-secondary">
                View Menu
              </Link>
            </div>

            <div className="restaurant-hours">
              <h3>Hours</h3>
              <dl>
                <dt>Monday - Friday:</dt>
                <dd>12:00 PM - 11:00 PM</dd>
                <dt>Saturday - Sunday:</dt>
                <dd>10:00 AM - 11:00 PM</dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OrderOnlinePage;