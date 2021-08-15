import { render, screen } from '@testing-library/react';
import App from './App';

test('validate if the title has the css class', () => {
  render(<App />);
  const title = screen.getByText('Money counter');
  expect(title).toHaveClass('navbar-brand');
});
