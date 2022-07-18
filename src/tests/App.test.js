import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import App from '../App';

describe('Rotas', () => {
  test('testando o conjunto de links de navegação', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    const favoriteLink = screen.getByRole('link', { name: /favorite/i });
    expect(favoriteLink).toBeInTheDocument();
  });

  test('testando renderização de página não encontrada', () => {
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
