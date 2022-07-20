import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../pages/NotFound';

describe('Testing component NotFound', () => {
  test('Test if there is h2', () => {
    render(<NotFound />);

    const notFoundText = screen.getByRole('heading',
      { name: /Page requested not found/i, level: 2 });
    expect(notFoundText).toBeInTheDocument();
  });

  test('Test if there is picture', () => {
    render(<NotFound />);
    const altImg = screen.getByAltText(
      'Pikachu crying because the page requested was not found',
    );
    expect(altImg).toHaveAttribute('src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
