import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext, ChildrenProps } from "../auth"

export const PublicRoute = ({ children }: ChildrenProps) => {

  const { logged } = useContext( AuthContext )

  return logged ? <Navigate to="/" /> : children
}
