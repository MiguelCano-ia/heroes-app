import { types } from "../types";

const initialState = {
  logged: false,
  name: 'Fernando',
}

export const authReducer = ( state, action ) => {

  switch ( action.type ) {
    case types.login:
      return {
        ...state, // futuras propiedades que tenga el state
        logged: true,
        name: action.payload
      };

    case types.logout:
      return {
        ...state,
        logged: false,
      };

    default:
      return state;
  }
}