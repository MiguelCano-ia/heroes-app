export interface AuthState {
  logged: boolean,
  user: User,
}

export interface User {
  id?: number,
  name?: string,
}

export interface ChildrenProps {
  children: JSX.Element | JSX.Element[]
}