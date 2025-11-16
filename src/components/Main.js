import React, { useReducer, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import { fetchAPI, submitAPI } from '../api';
import { useToast } from './ToastProvider';

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  switch(action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = new Date(action.date);
      return fetchAPI(selectedDate);
    default:
      return state;
  }
}

function timesReducer(state, action) {
  return updateTimes(state, action);
}

function Main() {
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  useEffect(() => {
    document.title = 'Reserve a Table - Little Lemon Restaurant';
  }, []);

  useEffect(() => {
    const loadInitialTimes = async () => {
      try {
        setIsLoading(true);
        setError(null);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading times:', err);
        setError('Unable to load available times');
        toast.error('Unable to load booking times. Please refresh the page.');
        setIsLoading(false);
      }
    };

    loadInitialTimes();
  }, [toast]);

  const submitForm = async (formData) => {
    try {
      const isSuccess = await submitAPI(formData);

      if (isSuccess) {
        setTimeout(() => {
          navigate('/confirmed', { 
            state: { bookingData: formData }
          });
        }, 1500);
      } else {
        toast.error('Unable to complete reservation. Please try again or call us at (312) 555-0123.');
        throw new Error('Booking submission failed');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      throw error;
    }
  };

  if (error) {
    return (
      <div className="booking-error">
        <h1>Unable to Load Booking Form</h1>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="btn btn-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <BookingPage
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
      isLoading={isLoading}
    />
  );
}

export default Main;