import { authReducer, types } from '../../../src/auth';

describe('Pruebas en authReducer', () => {

  const initialState = {
    logged: false,
    user: {},
  }

  const user = { id: 1, name: 'Miguel' }; 

  test('debe retornar el estado por defecto', () => {

    const action = {
      type: '',
    }
    
    const newState = authReducer( initialState, action );
    expect( newState ).toBe( initialState );
  });
  
  test('debe de (login) llamar el login autenticar y establecer el user', () => {
    
    const action = {
      type: types.login,
      payload: { user },
    }

    const newState = authReducer( initialState, action );
    expect( newState.logged ).toBeTruthy();
    expect( newState.user.name ).toBe( user.name );
  });

  test('debe de (logout) borrar el name del usuario y logged en false', () => {
    
    const state = {
      logged: true,
      user,
    }

    const action = {
      type: types.logout,
    }

    const newState = authReducer( state, action );
    expect( newState.logged ).toBeFalsy();
  });
});
