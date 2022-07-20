import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import App from '../App';

describe('Testing component Pokemon', () => {
  test('Test if pokemon there is in screen ', () => {
    const { container } = render(<MemoryRouter><App /></MemoryRouter>);

    const pokemonScreen = container.getElementsByClassName('pokemon-overview');
    expect(pokemonScreen).toBeDefined();
  });

  test('Test if there is a picture', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const altImg = screen.getByAltText(/Pikachu sprite/i);
    expect(altImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Test there is icon like star on screen', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const details = screen.getByRole('link', { name: /More details/i });
    userEvent.click(details);
    const validatePokemon = screen.getByRole('checkbox');
    userEvent.click(validatePokemon);
    const image = screen.getByAltText('Pikachu is marked as favorite');
    expect(image).toHaveAttribute('src', '/star-icon.svg');
  });

  test('Test there is data-test-id and type', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const dataTestId = screen.getByTestId('pokemon-type');
    expect(dataTestId).toBeDefined();
    expect(dataTestId).toHaveTextContent(/Electric/i);
=======
import React from 'react';
// import App from '../App';
import Pokemon from '../components/Pokemon';

describe('Testing component Pokemon', () => {
  test('Test link navegation on click ', () => {
    render(<Pokemon />);

    const pokemonLink = screen.getByRole('link', { name: ' /pokemons/25' });
    expect(pokemonLink).toBeInTheDocument();
>>>>>>> 18cf12c8a57ceaab15ee7c39080f6c896bf7bd27
  });
});
