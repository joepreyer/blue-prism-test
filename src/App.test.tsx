import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders the header', () => {
    render(<App />);
    const header = screen.getByText('Schedules');
    expect(header).toBeInTheDocument();
  });
});