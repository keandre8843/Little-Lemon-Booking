import React from 'react';
import BookingForm from './BookingForm';
import SEO from './SEO';
import LoadingSpinner from './LoadingSpinner';

function BookingPage({ availableTimes, dispatch, submitForm, isLoading }) {
  return (
    <>
      <SEO 
        title="Make a Reservation - Little Lemon Restaurant"
        description="Reserve your table at Little Lemon. Experience authentic Mediterranean cuisine in Chicago. Easy online booking available."
        image="/assets/restauranfood.jpg"
      />
      
      <main className="booking-page">
        <section className="booking-inner" aria-labelledby="booking-heading">
          <header className="booking-header">
            <h1 id="booking-heading">Reserve a Table</h1>
            <p className="booking-intro">
              Book your table at Little Lemon and experience authentic Mediterranean cuisine.
            </p>
            {!isLoading && availableTimes && availableTimes.length > 0 && (
              <p className="availability-notice" role="status">
                <span className="availability-icon">✓</span>
                {availableTimes.length} time slot{availableTimes.length !== 1 ? 's' : ''} available today
              </p>
            )}
          </header>

          {isLoading ? (
            <LoadingSpinner message="Loading available times..." />
          ) : (
            <BookingForm
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          )}
        </section>
      </main>
    </>
  );
}

export default BookingPage;