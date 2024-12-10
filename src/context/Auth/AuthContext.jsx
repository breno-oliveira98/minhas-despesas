import React, { createContext, useState, useContext } from 'react';

// Criando o contexto
const AuthContext = createContext();

// Componente provedor do contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Inicialmente sem usuário (não autenticado)

  const login = (email, password) => {
    // Aqui você pode adicionar lógica de autenticação real, como API.
    if (email === "admin" && password === "12345") {
      setUser({ username: "admin" });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para consumir o contexto
export const useAuth = () => useContext(AuthContext);
