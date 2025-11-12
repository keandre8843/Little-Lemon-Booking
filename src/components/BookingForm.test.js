import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

jest.mock('../api.js', () => ({
  fetchAPI: jest.fn((date) => {
    return ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];
  })
}));

test('Renders the Number of guests label', () => {
  render(<BookingForm />);
  const guestsLabel = screen.getByText("Number of guests");
  expect(guestsLabel).toBeInTheDocument();
}); 

test('initializeTimes returns the correct expected value', () => {
  const initialTimes = initializeTimes();
  
  // Test that it returns an array
  expect(Array.isArray(initialTimes)).toBe(true);
  
  // Test that it returns at least one time slot
  expect(initialTimes.length).toBeGreaterThan(0);
  
  // Test that times are in 12-hour format
  initialTimes.forEach(time => {
    expect(time).toMatch(/^\d{1,2}:\d{2} (AM|PM)$/);
  });
});

test('updateTimes returns updated times from fetchAPI', () => {
  const initialState = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];
  const action = { type: 'UPDATE_TIMES', date: '2025-12-25' };

  const result = updateTimes(initialState, action);
  console.log("updateTimes result:", result); // ✅ Corrected log

  expect(Array.isArray(result)).toBe(true);
  expect(result).toEqual(["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"]);
});