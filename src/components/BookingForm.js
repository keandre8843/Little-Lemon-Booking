import React, { useState } from 'react';

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [otherOccasion, setOtherOccasion] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    if (dispatch) {
      dispatch({
        type: 'UPDATE_TIMES',
        date: selectedDate
      });
    }
  };

  const handleOccasionChange = (e) => {
    const selectedOccasion = e.target.value;
    setOccasion(selectedOccasion);

    if (selectedOccasion !== 'Other') {
      setOtherOccasion('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalOccasion = occasion === 'Other' ? otherOccasion : occasion;

    const formData = {
      date,
      time,
      guests,
      occasion: finalOccasion
    };

    if (submitForm) {
      submitForm(formData);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select a time</option>
          {availableTimes && availableTimes.length > 0 ? (
            availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))
          ) : (
            <option disabled>No times available</option>
          )}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={handleOccasionChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {occasion === 'Other' && (
        <div className="form-group other-occasion-group">
          <label htmlFor="other-occasion">Please specify your occasion</label>
          <input
            type="text"
            id="other-occasion"
            placeholder="e.g., Graduation, Promotion, etc."
            value={otherOccasion}
            onChange={(e) => setOtherOccasion(e.target.value)}
            required
            aria-required="true"
          />
        </div>
      )}

      <button type="submit" className="btn btn-primary">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;