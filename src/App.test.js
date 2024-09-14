import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render title ', () => {
    render(<App />);
    const title = screen.getByText("Counter");

    expect(title).toBeInTheDocument();
  });
});
