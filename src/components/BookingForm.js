import React, { useState } from 'react';
import { useToast } from './ToastProvider';

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [otherOccasion, setOtherOccasion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  
  const toast = useToast();

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10;
  };

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  const isFormValid = () => {
    if (!date || !time || !guests || !name || !email || !phone) {
      return false;
    }

    if (guests < 1 || guests > 10) {
      return false;
    }

    if (occasion === 'Other' && !otherOccasion.trim()) {
      return false;
    }

    if (!validateEmail(email)) {
      return false;
    }

    if (!validatePhone(phone)) {
      return false;
    }

    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      return false;
    }

    return true;
  };

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

  const handleGuestsChange = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 1 && Number(value) <= 10)) {
      setGuests(value);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.email;
        return newErrors;
      });
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const formatted = formatPhone(value);
    setPhone(formatted);
    
    if (value && !validatePhone(value)) {
      setErrors(prev => ({ ...prev, phone: 'Phone number must be 10 digits' }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.phone;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.warning('Please fill out all required fields correctly');
      return;
    }

    setIsSubmitting(true);

    try {
      const finalOccasion = occasion === 'Other' ? otherOccasion : occasion;

      const formData = {
        date,
        time,
        guests: Number(guests),
        occasion: finalOccasion,
        name,
        email: email.toLowerCase().trim(),
        phone: phone.replace(/\D/g, '')
      };

      if (submitForm) {
        await submitForm(formData);
        toast.success('Reservation confirmed! Check your email for details.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Unable to complete reservation. Please try again or call us at (312) 555-0123');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="res-name">Full Name *</label>
        <input
          type="text"
          id="res-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          required
          disabled={isSubmitting}
          aria-required="true"
          aria-label="Enter your full name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-email">Email *</label>
        <input
          type="email"
          id="res-email"
          value={email}
          onChange={handleEmailChange}
          placeholder="john@example.com"
          required
          disabled={isSubmitting}
          aria-required="true"
          aria-label="Enter your email address"
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <small className="error-message" role="alert">{errors.email}</small>
        )}
        {!errors.email && (
          <small>We'll send your confirmation here</small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="res-phone">Phone Number *</label>
        <input
          type="tel"
          id="res-phone"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="(312) 555-0123"
          required
          disabled={isSubmitting}
          aria-required="true"
          aria-label="Enter your phone number"
          aria-invalid={errors.phone ? 'true' : 'false'}
        />
        {errors.phone && (
          <small className="error-message" role="alert">{errors.phone}</small>
        )}
        {!errors.phone && (
          <small>10 digits required</small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="res-date">Choose date *</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          min={getTodayDate()}
          required
          disabled={isSubmitting}
          aria-required="true"
          aria-label="Choose reservation date"
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time *</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          disabled={isSubmitting}
          aria-required="true"
          aria-label="Choose reservation time"
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
        <label htmlFor="guests">Number of guests *</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
          required
          disabled={isSubmitting}
          aria-required="true"
          aria-label="Number of guests"
          aria-describedby="guests-description"
        />
        <small id="guests-description">Between 1 and 10 guests</small>
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion *</label>
        <select
          id="occasion"
          value={occasion}
          onChange={handleOccasionChange}
          required
          disabled={isSubmitting}
          aria-required="true"
          aria-label="Choose occasion"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {occasion === 'Other' && (
        <div className="form-group other-occasion-group">
          <label htmlFor="other-occasion">Please specify your occasion *</label>
          <input
            type="text"
            id="other-occasion"
            placeholder="e.g., Graduation, Promotion, etc."
            value={otherOccasion}
            onChange={(e) => setOtherOccasion(e.target.value)}
            required
            disabled={isSubmitting}
            minLength="3"
            maxLength="50"
            aria-required="true"
            aria-label="Specify other occasion"
          />
        </div>
      )}

      {isSubmitting && (
        <div className="form-loading-state" role="status" aria-live="polite">
          <div className="loading-inline">
            <div className="loading-spinner"></div>
            <span>Processing your reservation...</span>
          </div>
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={!isFormValid() || isSubmitting}
        aria-label="Submit reservation"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? 'Processing...' : 'Make Your Reservation'}
      </button>
    </form>
  );
}

export default BookingForm;