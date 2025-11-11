import React from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <section className="booking-page" aria-labelledby="booking-heading">
      <div className="booking-inner">
        <h1 id="booking-heading">Reserve a Table</h1>

        <BookingForm />
      </div>
    </section>
  );
}

export default BookingPage;