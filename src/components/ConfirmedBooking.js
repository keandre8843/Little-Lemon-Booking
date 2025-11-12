import React from 'react';

function ConfirmedBooking() {
  return (
    <div className="confirmed-booking">
      <h1>Booking Confirmed!</h1>
      <p>Your reservation has been successfully confirmed.</p>
      <p>We look forward to seeing you at Little Lemon!</p>
      <p>A confirmation email has been sent to your email address.</p>
      <a href="/" className="btn btn-primary">Return to Home</a>
    </div>
  );
}

export default ConfirmedBooking;