import { render, screen } from '@testing-library/react';
import React from 'react';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testing component FavoritePokemons', () => {
  test('Test if there are not favorites pokemons ', () => {
    render(<FavoritePokemons />);

    const notFavoritepokemon = screen.getByText(/No favorite pokemon found/i);
    expect(notFavoritepokemon).toBeInTheDocument();
  });

  test('Test if show all favorites pokemons ', () => {
    const { container } = render(<FavoritePokemons />);

    const favoritepokemon = container.getElementsByClassName('favorite-pokemon');
    expect(favoritepokemon.legth).toBeFalsy();
  });
});
