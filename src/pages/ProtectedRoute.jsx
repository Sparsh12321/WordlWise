import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/FakeAuthenticationContext";
import { useEffect } from "react";

export default function ProtectedRoute({children}) {
  const{isAuthenticated}=useAuth();
  const navigate=useNavigate();
  useEffect(function(){
    if(!isAuthenticated)navigate("/");
  },[isAuthenticated,navigate])
    return children;
}