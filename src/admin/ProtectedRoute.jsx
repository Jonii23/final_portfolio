import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthed } = useAuth();

  // Not logged in → redirect to admin login
  if (!isAuthed) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
