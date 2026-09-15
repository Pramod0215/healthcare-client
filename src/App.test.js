import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the care dashboard', () => {
  render(<App />);
  expect(screen.getByText(/Good morning, Alex/i)).toBeInTheDocument();
  expect(screen.getByText(/Upcoming appointments/i)).toBeInTheDocument();
});
