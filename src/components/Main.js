import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../api';

// Initialize times using fetchAPI for today's date
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

// Update times using fetchAPI based on selected date
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

  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);

    if (isSuccess) {
      navigate('/confirmed');
    }
  };

  return (
    <main>
      <h1>Book a Table</h1>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default Main;