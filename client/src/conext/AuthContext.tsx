import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ISingUp } from '../interfaces/singUp.interface';

type AuthProviderProps = {
  children: ReactNode;
};

interface IAuthContext {
  authUser: ISingUp | null;
  setAuthUser: React.Dispatch<React.SetStateAction<ISingUp | null>>;
}

// Crear el contexto con un valor inicial que incluye authUser y setAuthUser
export const AuthContext = createContext<IAuthContext | undefined>(undefined);

// Hook personalizado para acceder al contexto
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<ISingUp | null>(() => {
    const storedUser = localStorage.getItem('chat-user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (authUser) {
      localStorage.setItem('chat-user', JSON.stringify(authUser));
    } else {
      localStorage.removeItem('chat-user');
    }
  }, [authUser]);

  // Proporcionar tanto authUser como setAuthUser al valor del Provider
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
