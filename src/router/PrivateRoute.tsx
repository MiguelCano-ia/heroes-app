import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext, ChildrenProps } from "../auth";

export const PrivateRoute = ({ children }: ChildrenProps) => {
  
  const { logged } = useContext( AuthContext );

  return logged ? children : <Navigate to="/login" />;
}
