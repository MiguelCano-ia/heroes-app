import React from 'react';
import { fireEvent, render,screen } from '@testing-library/react';
import { Navbar } from '../../../src/ui/components';
import { AuthContext } from '../../../src/auth';
import { MemoryRouter } from 'react-router-dom';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  // solo sobreescribimos el hook que vamos a usar
  useNavigate: () => mockedUseNavigate
}) );

describe('Pruebas en <Navbar />', () => {

  const contextValue = {
    logged: true,
    user: {
      id: 1,
      name: 'Miguel'
    },
    logout: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrar el nombre del usuario', () => {
    
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={ contextValue }>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const span = screen.getByLabelText('span-user-name');
    expect( span.innerHTML ).toBe( contextValue.user.name );
  });
  
  test('debe de llamar el logut y el navigate cuando se hace click en el boton', () => {
    
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={ contextValue }>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const button = screen.getByLabelText('button-logout');
    fireEvent.click( button );
    expect( contextValue.logout ).toHaveBeenCalled();
    expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', { "replace": true });
  });
});
