import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../pages/About';

describe('Testing component About', () => {
  test('Test if there is h2', () => {
    render(<About />);

    const aboutPokedex = screen.getByRole('heading',
      { name: /About Pokédex/i, level: 2 });
    expect(aboutPokedex).toBeInTheDocument();
  });

  test('Test if there are two same Pokeédex', () => {
    render(<About />);

    const pokedex = screen.getAllByText(/Pokédex/i);
    expect(pokedex).toBeDefined();
  });

  test('Test if there is a picture0', () => {
    render(<About />);

    const altImg = screen.getByAltText('Pokédex');
    expect(altImg).toHaveAttribute('src',
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
