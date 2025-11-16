import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from './SEO';

function ConfirmedBooking() {
  const location = useLocation();
  const bookingData = location.state?.bookingData;

  return (
    <>
      <SEO 
        title="Reservation Confirmed - Little Lemon"
        description="Your reservation at Little Lemon has been confirmed. We look forward to serving you!"
      />
      
      <div className="confirmed-booking">
        <div className="confirmation-icon">✓</div>
        <h1>Booking Confirmed!</h1>
        
        {bookingData ? (
          <div className="booking-details">
            <p className="confirmation-message">
              Thank you, <strong>{bookingData.name}</strong>! Your reservation has been confirmed.
            </p>
            
            <div className="details-card">
              <h2>Reservation Details</h2>
              <dl className="details-list">
                <dt>Date:</dt>
                <dd>{new Date(bookingData.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</dd>
                
                <dt>Time:</dt>
                <dd>{bookingData.time}</dd>
                
                <dt>Guests:</dt>
                <dd>{bookingData.guests} {bookingData.guests === 1 ? 'person' : 'people'}</dd>
                
                <dt>Occasion:</dt>
                <dd>{bookingData.occasion}</dd>
              </dl>
            </div>

            <div className="confirmation-email">
              <p>
                A confirmation email has been sent to <strong>{bookingData.email}</strong>
              </p>
              <p>
                We'll also send you a reminder 24 hours before your reservation.
              </p>
            </div>
          </div>
        ) : (
          <p className="confirmation-message">
            Your reservation has been confirmed! Check your email for details.
          </p>
        )}

        <div className="confirmation-actions">
          <Link to="/" className="btn btn-primary">
            Return to Home
          </Link>
          <a href="tel:+13125550123" className="btn btn-secondary">
            Call Us: (312) 555-0123
          </a>
        </div>

        <div className="additional-info">
          <h3>What's Next?</h3>
          <ul>
            <li>✓ Check your email for confirmation details</li>
            <li>✓ You'll receive a reminder 24 hours before</li>
            <li>✓ Need to make changes? Call us at (312) 555-0123</li>
            <li>✓ Please arrive 10 minutes early</li>
          </ul>
        </div>

        <div className="restaurant-info">
          <h3>Location</h3>
          <address>
            Little Lemon Restaurant<br />
            123 Main Street<br />
            Chicago, Illinois 60601
          </address>
        </div>
      </div>
    </>
  );
}

export default ConfirmedBooking;