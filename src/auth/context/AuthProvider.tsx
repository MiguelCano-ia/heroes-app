import { useReducer } from "react"
import { AuthContext,authReducer } from "./"
import { types } from "../types"
import { ChildrenProps } from "../interfaces";


// const initialState: AuthState = {
//   logged: false,
// }

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') || 'null' ); // No colocar {} porque js lo interpreta como un valor truthy.

  return {
    logged: !!user, // Asegura que sea un booleano
    user,
  }
}

export const AuthProvider = ({ children }: ChildrenProps) => {

  const [ authState, dispatch ] = useReducer( authReducer, {}, init )

  const login = ( name = '' ) => {

    const user = { id: Date.now(), name: name };

    const action = {
      type: types.login,
      payload: { user },
    }

    localStorage.setItem( 'user', JSON.stringify( user ) );
    dispatch ( action );
  }

  const logout = () => {
    
    const action = {
      type: types.logout,
    }
    
    localStorage.removeItem( 'user' );
    dispatch( action );
  }

  return (
    <AuthContext.Provider value={{
        ...authState,
        login,  
        logout,
      }}>
      { children }
    </AuthContext.Provider>
  )
}
