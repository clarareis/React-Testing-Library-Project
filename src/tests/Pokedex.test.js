import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Testing component Pokedex', () => {
  test('Test if there is h2', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const pokedexText = screen.getByRole('heading',
      { name: /Encountered pokémons/i, level: 2 });
    expect(pokedexText).toBeInTheDocument();
  });

  test('Test if there is a button for reset', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const pokedexFilter = screen.getByRole('button', { name: 'All' });
    fireEvent.click(pokedexFilter);
    const reset = screen.getAllByTestId('pokemon-type-button');
    expect(reset).toBeDefined();
  });

  test('Test if there a pokemon', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const pokemonCard = screen.getByRole('button', { name: /fire/i });
    fireEvent.click(pokemonCard);
    const showPokemon = screen.getAllByTestId('pokemon-type-button');
    expect(showPokemon).toBeDefined();
  });
});
