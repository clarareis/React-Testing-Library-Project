import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import App from '../App';

describe('Router', () => {
  test('Test render home', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  test('Test render about', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
  });

  test('Test render favorites', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const favoriteLink = screen.getByRole('link', { name: /favorite/i });
    expect(favoriteLink).toBeInTheDocument();
  });

  test('Test render not found', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    history.push('/blabla');
    const notFound = screen.getByText(/not found/i);
    expect(notFound).toBeInTheDocument();
  });
});
