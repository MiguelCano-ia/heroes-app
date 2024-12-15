import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

interface ChildrenProps {
  children: JSX.Element | JSX.Element[]
}

const initialState = {
  logged: false,
}

export const AuthProvider = ({ children }: ChildrenProps) => {

  const [ state, dispatch ] = useReducer( authReducer, initialState)

  return (
    <AuthContext.Provider value={{ }}>
      { children }
    </AuthContext.Provider>
  )
}
