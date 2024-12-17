import React from 'react';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <PrivateRoute />', () => {
  test('debe mostrar el children si esta autenticado', () => {
    
    // Simular el localStorage
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        name: 'Juan',
        id: 123,
      }
    };

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Ruta privada') ).toBeTruthy();

    // Verificar que se haya llamado localStorage
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/');
  });
  
});
