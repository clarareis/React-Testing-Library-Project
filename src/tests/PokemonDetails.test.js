import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import App from '../App';
import pokemons from '../data';

describe('Testing Pokemon informations are show in screen', () => {
  test('Test if will be the name of Pokemon', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const charmander = pokemons[1];
    history.push(`/pokemons/${charmander.id}`);
    const pokemonName = screen.getByRole('heading',
      { name: 'Charmander Details', level: 2 });
    expect(pokemonName).toBeInTheDocument();
  });

  test('Test if will be there "Sumary" in the document', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const charmander = pokemons[1];
    history.push(`/pokemons/${charmander.id}`);
    const summary = screen.getByRole('heading',
      { name: /Summary/i, level: 2 });
    expect(summary).toBeInTheDocument();
  });

  test('Test if will be there details paragraf in the document about Pokemon', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const charmander = pokemons[1];
    const paragrafOfText = /The flame on its tail shows the strength/i;
    history.push(`/pokemons/${charmander.id}`);
    const paragraf = screen.getByText(paragrafOfText);
    expect(paragraf).toBeInTheDocument();
  });

  test('Details section will be there a h2 with the text "Game Locations of Charmander"',
    () => {
      const history = createMemoryHistory();
      render(
        <Router history={ history }>
          <App />
        </Router>,
      );

      const charmander = pokemons[1];
      history.push(`/pokemons/${charmander.id}`);
      const gameLocation = screen.getByRole('heading',
        { name: /Game Locations of Charmander/i, level: 2 });
      expect(gameLocation).toBeInTheDocument();
    });

  test('test if will be there a map with the picture and your name', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const charmander = pokemons[1];
    history.push(`/pokemons/${charmander.id}`);
    const altImg = screen.getAllByAltText(/Charmander location/i);
    expect(altImg[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/4/4a/Kanto_Route_3_Map.png');
  });

  test('test if will be user can be favorite the pokemon', () => {
    const history = createMemoryHistory();
    const { container, getByLabelText } = render(
      <Router
        history={ history }
      >
        <App />
      </Router>,
    );

    const charmander = pokemons[1];
    history.push(`/pokemons/${charmander.id}`);

    const getCheckbox = getByLabelText('Pokémon favoritado?');
    fireEvent.click(getCheckbox);

    const favoritePokemon = screen.getByAltText(/charmander is marked as favorite/i);
    expect(favoritePokemon).toBeInTheDocument();
    // expect(favoritePokemon).not.toBeInTheDocument();
  });
});
