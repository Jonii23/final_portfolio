import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(false);

  // Load stored auth on refresh
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_admin_authed");
    if (saved === "1") setIsAuthed(true);
  }, []);

  const login = (password) => {
    const expected = import.meta.env.VITE_ADMIN_PASSWORD || "Olwethu@23*!";
    if (password === expected) {
      localStorage.setItem("portfolio_admin_authed", "1");
      setIsAuthed(true);
      return { ok: true };
    } else {
      return { ok: false, error: "Invalid password" };
    }
  };

  const logout = () => {
    localStorage.removeItem("portfolio_admin_authed");
    setIsAuthed(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

