import { AuthState } from "../interfaces";
import { types } from "../types";

interface User {
  id: number,
  name: string,
}

interface PayLoad {
  user: User,
}

type Action =
  | { type: '[Auth] Login', payload: PayLoad }
  | { type: '[Auth] Logout' };

export const authReducer = ( state: AuthState, action: Action ) => {

  switch ( action.type ) {
    case types.login:
      return {
        ...state, // futuras propiedades que tenga el state
        logged: true,
        user: action.payload.user,
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