import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders forecast.it link', () => {
  render(<App />);
  const linkElement = screen.getByText(/forecast.it/i);
  expect(linkElement).toBeInTheDocument();
});
