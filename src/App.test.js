import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the care dashboard', async () => {
  localStorage.setItem('careflow_demo', 'true');
  localStorage.setItem('careflow_user', JSON.stringify({ name: 'Alex Morgan', role: 'doctor' }));
  render(<App />);
  expect(await screen.findByText(/Good morning, Alex/i)).toBeInTheDocument();
  expect(await screen.findByText(/Upcoming visits/i)).toBeInTheDocument();
  localStorage.clear();
});
