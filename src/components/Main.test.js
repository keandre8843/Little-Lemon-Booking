jest.mock('../api');

import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from '../api';

beforeEach(() => {
  fetchAPI.mockReturnValue(["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"]);
});

test('initializeTimes returns the correct expected value', () => {
  const initialTimes = initializeTimes();

  expect(Array.isArray(initialTimes)).toBe(true);
  expect(initialTimes.length).toBeGreaterThan(0);

  initialTimes.forEach(time => {
    expect(time).toMatch(/^\d{1,2}:\d{2} (AM|PM)$/);
  });
});

test('updateTimes returns updated times from fetchAPI', () => {
  const initialState = [];
  const action = { type: 'UPDATE_TIMES', date: '2025-12-25' };

  const result = updateTimes(initialState, action);

  expect(Array.isArray(result)).toBe(true);
  expect(result).toEqual(["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"]);
});