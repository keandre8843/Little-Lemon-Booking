import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Reserve a Table button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Reserve a Table/i);
  expect(buttonElement).toBeInTheDocument();
});
