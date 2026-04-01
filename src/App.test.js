import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders home page hero title', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(
    screen.getByRole('heading', { name: /Fun Kids Learning Activities at Home/i })
  ).toBeInTheDocument();
});
