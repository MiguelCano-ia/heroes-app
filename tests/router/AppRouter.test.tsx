import React from 'react';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <AppRouter />', () => {
  test('debe de mostrar el longin si no esta autenticado', () => {
    
    const contextValue = {
      logged: false,
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    
    expect( screen.getAllByText('Login').length ).toBe(2);
  });

  test('debe de mostrar el component de Marvel si esta autenticado', () => {
    
    const contextValue = {
      logged: true,
      user: {
        id: 123,
        name: 'Juanito'
      }
    }

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/login']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    
    // Igual o mayor a 1
    expect( screen.getAllByText( 'Marvel').length ).toBeGreaterThanOrEqual(1);
  });
});

