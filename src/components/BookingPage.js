import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  // Receive state and dispatch from Main component
  // Pass them down to BookingForm component

  return (
    <section className="booking-page" aria-labelledby="booking-heading">
      <div className="booking-inner">
        <h1 id="booking-heading">Reserve a Table</h1>

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
        />
      </div>
    </section>
  );
}

export default BookingPage;