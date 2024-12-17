import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchPage } from '../../../src/heroes';
import { MemoryRouter } from 'react-router-dom';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <SearchPage />', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrarse correctamente con valores por defecto', () => {
    
    const { container } =  render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect( container ).toMatchSnapshot();
  });

  test('debe de mostrar a batman y el valor del queryString', () => {
    
    render(
      <MemoryRouter initialEntries={['/search?q=batman']} >
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect( input.value ).toBe('batman');

    const img = screen.getByRole('img') as HTMLImageElement; ;
    expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

    const div = screen.getByLabelText('error-message');
    expect( div.style.display ).toBe('none');
  });

  test('debe de mostrar un error si no se encuentra el hero', () => {

    render(
      <MemoryRouter initialEntries={['/search?q=batman123']} >
        <SearchPage />
      </MemoryRouter>
    );

    const div = screen.getByLabelText('error-message');
    expect( div.style.display ).not.toBe('none');
  });

  test('debe de llamar el navegate a la pantalla nueva ', () => {
    
    const searchText = 'flash';
    const navigate = `?q=${ searchText }`;

    render(
      <MemoryRouter initialEntries={['/search']} >
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByLabelText('form') as HTMLFormElement;

    fireEvent.input( input, { target: { value: searchText } });
    fireEvent.submit( form );

    expect( mockedUseNavigate ).toHaveBeenCalledWith( navigate );
  });
});
