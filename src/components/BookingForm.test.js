import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

describe('BookingForm - HTML5 Validation Attributes', () => {
  
  describe('Date Input Field', () => {
    test('should have type="date" attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('type', 'date');
    });

    test('should have required attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toBeRequired();
    });

    test('should have min attribute set to today\'s date', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const dateInput = screen.getByLabelText(/choose date/i);
      const today = new Date();
      const expectedMin = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      expect(dateInput).toHaveAttribute('min', expectedMin);
    });

    test('should have aria-required attribute set to true', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('aria-required', 'true');
    });

    test('should have aria-label attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('aria-label', 'Choose reservation date');
    });

    test('should have id="res-date" attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('id', 'res-date');
    });
  });

  describe('Time Select Field', () => {
    test('should have required attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toBeRequired();
    });

    test('should have aria-required attribute set to true', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toHaveAttribute('aria-required', 'true');
    });

    test('should have aria-label attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toHaveAttribute('aria-label', 'Choose reservation time');
    });

    test('should have id="res-time" attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toHaveAttribute('id', 'res-time');
    });
  });

  describe('Guests Input Field', () => {
    test('should have type="number" attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('type', 'number');
    });

    test('should have required attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toBeRequired();
    });

    test('should have min attribute set to 1', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('min', '1');
    });

    test('should have max attribute set to 10', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('max', '10');
    });

    test('should have placeholder text', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('placeholder', '1');
    });

    test('should have aria-required attribute set to true', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('aria-required', 'true');
    });

    test('should have aria-label attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('aria-label', 'Number of guests');
    });

    test('should have aria-describedby attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('aria-describedby', 'guests-description');
    });

    test('should have id="guests" attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('id', 'guests');
    });
  });

  describe('Occasion Select Field', () => {
    test('should have required attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      expect(occasionSelect).toBeRequired();
    });

    test('should have aria-required attribute set to true', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      expect(occasionSelect).toHaveAttribute('aria-required', 'true');
    });

    test('should have aria-label attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      expect(occasionSelect).toHaveAttribute('aria-label', 'Choose occasion');
    });

    test('should have id="occasion" attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      expect(occasionSelect).toHaveAttribute('id', 'occasion');
    });
  });

  describe('Other Occasion Input Field (conditional)', () => {
    test('should have type="text" attribute when "Other" is selected', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      fireEvent.change(occasionSelect, { target: { value: 'Other' } });
      
      const otherInput = screen.getByLabelText(/please specify your occasion/i);
      expect(otherInput).toHaveAttribute('type', 'text');
    });

    test('should have required attribute when "Other" is selected', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      fireEvent.change(occasionSelect, { target: { value: 'Other' } });
      
      const otherInput = screen.getByLabelText(/please specify your occasion/i);
      expect(otherInput).toBeRequired();
    });

    test('should have minLength attribute set to 3 when "Other" is selected', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      fireEvent.change(occasionSelect, { target: { value: 'Other' } });
      
      const otherInput = screen.getByLabelText(/please specify your occasion/i);
      expect(otherInput).toHaveAttribute('minLength', '3');
    });

    test('should have maxLength attribute set to 50 when "Other" is selected', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      fireEvent.change(occasionSelect, { target: { value: 'Other' } });
      
      const otherInput = screen.getByLabelText(/please specify your occasion/i);
      expect(otherInput).toHaveAttribute('maxLength', '50');
    });

    test('should have placeholder text when "Other" is selected', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      fireEvent.change(occasionSelect, { target: { value: 'Other' } });
      
      const otherInput = screen.getByLabelText(/please specify your occasion/i);
      expect(otherInput).toHaveAttribute('placeholder', 'e.g., Graduation, Promotion, etc.');
    });

    test('should have aria-required attribute set to true when "Other" is selected', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      fireEvent.change(occasionSelect, { target: { value: 'Other' } });
      
      const otherInput = screen.getByLabelText(/please specify your occasion/i);
      expect(otherInput).toHaveAttribute('aria-required', 'true');
    });

    test('should have aria-label attribute when "Other" is selected', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      fireEvent.change(occasionSelect, { target: { value: 'Other' } });
      
      const otherInput = screen.getByLabelText(/please specify your occasion/i);
      expect(otherInput).toHaveAttribute('aria-label', 'Specify other occasion');
    });

    test('should have id="other-occasion" attribute when "Other" is selected', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      fireEvent.change(occasionSelect, { target: { value: 'Other' } });
      
      const otherInput = screen.getByLabelText(/please specify your occasion/i);
      expect(otherInput).toHaveAttribute('id', 'other-occasion');
    });
  });

  describe('Submit Button', () => {
    test('should have type="submit" attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const submitButton = screen.getByRole('button', { name: /submit reservation/i });
      expect(submitButton).toHaveAttribute('type', 'submit');
    });

    test('should have aria-label attribute', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const submitButton = screen.getByRole('button', { name: /submit reservation/i });
      expect(submitButton).toHaveAttribute('aria-label', 'Submit reservation');
    });
  });
});

describe('BookingForm - JavaScript Validation Functions', () => {
  
  describe('Date Validation', () => {
    test('VALID: should accept today\'s date', () => {
      const { container } = render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const dateInput = screen.getByLabelText(/choose date/i);
      
      const today = new Date();
      const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      
      fireEvent.change(dateInput, { target: { value: todayString } });
      expect(dateInput.value).toBe(todayString);
    });

    test('VALID: should accept future dates', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const dateInput = screen.getByLabelText(/choose date/i);
      
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7);
      const futureDateString = `${futureDate.getFullYear()}-${String(futureDate.getMonth() + 1).padStart(2, '0')}-${String(futureDate.getDate()).padStart(2, '0')}`;
      
      fireEvent.change(dateInput, { target: { value: futureDateString } });
      expect(dateInput.value).toBe(futureDateString);
    });

    test('INVALID: form should be invalid with past date', () => {
      const mockSubmit = jest.fn();
      render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={mockSubmit} />);
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const submitButton = screen.getByRole('button', { name: /submit reservation/i });

      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);
      const pastDateString = `${pastDate.getFullYear()}-${String(pastDate.getMonth() + 1).padStart(2, '0')}-${String(pastDate.getDate()).padStart(2, '0')}`;
      
      fireEvent.change(dateInput, { target: { value: pastDateString } });
      fireEvent.change(timeSelect, { target: { value: '17:00' } });
      fireEvent.change(guestsInput, { target: { value: '2' } });
      expect(submitButton).toBeDisabled();
    });

    test('INVALID: form should not submit with empty date', () => {
      const mockSubmit = jest.fn();
      render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={mockSubmit} />);
      
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const submitButton = screen.getByRole('button', { name: /submit reservation/i });
      
      fireEvent.change(timeSelect, { target: { value: '17:00' } });
      fireEvent.change(guestsInput, { target: { value: '2' } });
      expect(submitButton).toBeDisabled();
    });
  });

  describe('Time Validation', () => {
    test('VALID: should accept valid time selection', () => {
      render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} />);
      const timeSelect = screen.getByLabelText(/choose time/i);
      
      fireEvent.change(timeSelect, { target: { value: '18:00' } });
      expect(timeSelect.value).toBe('18:00');
    });

    test('INVALID: form should not submit with empty time', () => {
      const mockSubmit = jest.fn();
      render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={mockSubmit} />);
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const submitButton = screen.getByRole('button', { name: /submit reservation/i });
      
      const today = new Date();
      const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      
      fireEvent.change(dateInput, { target: { value: todayString } });
      fireEvent.change(guestsInput, { target: { value: '2' } });
      expect(submitButton).toBeDisabled();
    });
  });

  describe('Guests Validation', () => {
    test('VALID: should accept 1 guest (minimum)', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      fireEvent.change(guestsInput, { target: { value: '1' } });
      expect(guestsInput.value).toBe('1');
    });

    test('VALID: should accept 10 guests (maximum)', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      fireEvent.change(guestsInput, { target: { value: '10' } });
      expect(guestsInput.value).toBe('10');
    });

    test('VALID: should accept guests between 1 and 10', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      fireEvent.change(guestsInput, { target: { value: '5' } });
      expect(guestsInput.value).toBe('5');
    });

    test('INVALID: should not accept 0 guests', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      fireEvent.change(guestsInput, { target: { value: '0' } });
      expect(guestsInput.value).toBe('1');
    });

    test('INVALID: should not accept more than 10 guests', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      fireEvent.change(guestsInput, { target: { value: '11' } });
      expect(guestsInput.value).toBe('1');
    });

    test('INVALID: should not accept negative numbers', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      fireEvent.change(guestsInput, { target: { value: '-5' } });
      expect(guestsInput.value).toBe('1');
    });

    test('INVALID: form should not submit with empty guests', () => {
      const mockSubmit = jest.fn();
      render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={mockSubmit} />);
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const submitButton = screen.getByRole('button', { name: /submit reservation/i });
      
      const today = new Date();
      const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      
      fireEvent.change(dateInput, { target: { value: todayString } });
      fireEvent.change(timeSelect, { target: { value: '17:00' } });
      fireEvent.change(guestsInput, { target: { value: '' } });
      expect(submitButton).toBeDisabled();
    });
  });

  describe('Occasion Validation', () => {
    test('VALID: should accept "Birthday" selection', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
      expect(occasionSelect.value).toBe('Birthday');
    });

    test('VALID: should accept "Anniversary" selection', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      
      fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });
      expect(occasionSelect.value).toBe('Anniversary');
    });

    test('VALID: should accept "Other" with valid custom text', () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} />);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      
      fireEvent.change(occasionSelect, { target: { value: 'Other' } });
      
      const otherInput = screen.getByLabelText(/please specify your occasion/i);
      fireEvent.change(otherInput, { target: { value: 'Graduation' } });
      
      expect(otherInput.value).toBe('Graduation');
    });

    test('INVALID: should disable submit when "Other" is selected with empty text', () => {
      const mockSubmit = jest.fn();
      render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={mockSubmit} />);
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      const submitButton = screen.getByRole('button', { name: /submit reservation/i });
      
      const today = new Date();
      const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      
      fireEvent.change(dateInput, { target: { value: todayString } });
      fireEvent.change(timeSelect, { target: { value: '17:00' } });
      fireEvent.change(guestsInput, { target: { value: '2' } });
      fireEvent.change(occasionSelect, { target: { value: 'Other' } });
      expect(submitButton).toBeDisabled();
    });

    test('INVALID: should disable submit when "Other" is selected with only whitespace', () => {
      const mockSubmit = jest.fn();
      render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={mockSubmit} />);
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      const submitButton = screen.getByRole('button', { name: /submit reservation/i });
      
      const today = new Date();
      const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      
      fireEvent.change(dateInput, { target: { value: todayString } });
      fireEvent.change(timeSelect, { target: { value: '17:00' } });
      fireEvent.change(guestsInput, { target: { value: '2' } });
      fireEvent.change(occasionSelect, { target: { value: 'Other' } });
      
      const otherInput = screen.getByLabelText(/please specify your occasion/i);
      fireEvent.change(otherInput, { target: { value: '   ' } });
      expect(submitButton).toBeDisabled();
    });
  });

  describe('Form Submission Integration Tests', () => {
    test.skip('VALID: should submit form with all valid inputs', () => {
      const mockSubmit = jest.fn();
      window.alert = jest.fn();
      
      const { container } = render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={mockSubmit} />);
      
      const form = container.querySelector('form');
      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      
      const today = new Date();
      const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      
      fireEvent.change(dateInput, { target: { value: todayString } });
      fireEvent.change(timeSelect, { target: { value: '18:00' } });
      fireEvent.change(guestsInput, { target: { value: '4' } });
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
      
      fireEvent.submit(form);
      
      expect(mockSubmit).toHaveBeenCalledWith({
        date: todayString,
        time: '18:00',
        guests: 4,
        occasion: 'Birthday'
      });
    });

    test.skip('VALID: should submit form with "Other" occasion correctly', () => {
      const mockSubmit = jest.fn();
      window.alert = jest.fn();
      
      const { container } = render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={mockSubmit} />);
      
      const form = container.querySelector('form');
      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const occasionSelect = screen.getByLabelText(/^occasion \*/i);
      
      const today = new Date();
      const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      
      fireEvent.change(dateInput, { target: { value: todayString } });
      fireEvent.change(timeSelect, { target: { value: '19:00' } });
      fireEvent.change(guestsInput, { target: { value: '6' } });
      fireEvent.change(occasionSelect, { target: { value: 'Other' } });
      
      const otherInput = screen.getByLabelText(/please specify your occasion/i);
      fireEvent.change(otherInput, { target: { value: 'Graduation Celebration' } });
      
      fireEvent.submit(form);
      
      expect(mockSubmit).toHaveBeenCalledWith({
        date: todayString,
        time: '19:00',
        guests: 6,
        occasion: 'Graduation Celebration'
      });
    });

    test('INVALID: should not submit and show alert with incomplete form', () => {
      const mockSubmit = jest.fn();
      const mockAlert = jest.fn();
      window.alert = mockAlert;
      
      const { container } = render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={mockSubmit} />);
      
      const form = container.querySelector('form');
      const submitButton = screen.getByRole('button', { name: /submit reservation/i });
      expect(submitButton).toBeDisabled();
      fireEvent.submit(form);
      
      expect(mockSubmit).not.toHaveBeenCalled();
      expect(mockAlert).toHaveBeenCalledWith('Please fill out all fields correctly.');
    });
  });
});