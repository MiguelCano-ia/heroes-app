import React from 'react';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PublicRoute />', () => {
  test('debe de mostrar el children si no esta autenticado', () => {
    
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={ contextValue }>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    
    expect( screen.getByText('Ruta publica') ).toBeTruthy();
  });

  test('debe navegar si esta autenticado', () => {
    
    const contextValue = {
      logged: true,
      user: {
        name: 'Juan',
        id: 123,
      }
    };

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/login']}>

          <Routes>
            <Route path='login' element={
              <PublicRoute>
                <h1>Ruta publica</h1>
              </PublicRoute>
             }/>

            <Route path='marvel' element={ <h1>Pagina de marvel</h1> }/> 
            {/* El path tiene que hacer match con la del componente real */}
          </Routes>

        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Pagina de marvel') ).toBeTruthy();
  });
});
