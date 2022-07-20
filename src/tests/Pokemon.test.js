import { render, screen } from '@testing-library/react';
import React from 'react';
// import App from '../App';
import Pokemon from '../components/Pokemon';

describe('Testing component Pokemon', () => {
  test('Test link navegation on click ', () => {
    render(<Pokemon />);

    const pokemonLink = screen.getByRole('link', { name: ' /pokemons/25' });
    expect(pokemonLink).toBeInTheDocument();
  });
});
