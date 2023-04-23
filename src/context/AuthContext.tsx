import { createContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface ContextType {
  login: (email: string) => void;
  logout: () => void;
  user: boolean;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<ContextType>({
  login: (email: string) => {},
  logout: () => {},
  user: false,
});

const AUTH_KEY = "auth";

const AuthContextProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState(localStorage.getItem(AUTH_KEY) !== null);
  const navigate = useNavigate();

  const login = useCallback((email: string) => {
    localStorage.setItem(AUTH_KEY, email);
    setUser(localStorage.getItem(AUTH_KEY) !== null);
    navigate("/", { replace: true });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setUser(localStorage.getItem(AUTH_KEY) !== null);
    navigate("/auth", { replace: true });
  }, []);

  const value = { login, logout, user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
