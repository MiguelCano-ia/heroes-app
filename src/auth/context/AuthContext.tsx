import { createContext } from "react";
import { User } from "../interfaces";

export type AuthContextProps = {
  logged: boolean,
  user: User,
  login: ( name: string ) => void,
  logout: () => void,
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

// cuando lo consumas, va a tener un objeto con la propiedad authState
