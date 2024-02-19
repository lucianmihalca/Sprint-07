import { createContext, useContext, useState, useEffect } from 'react';
import { IUser } from '../interfaces/usuario/usuario.interface';
import { IAuthContext } from '../interfaces/context/auth.context.interface';
import { AuthProviderProps } from '../interfaces/context/auth.provider.interface'; // Ajustado para importar desde el nuevo archivo

// Crear el contexto con un valor inicial que incluye authUser y setAuthUser
export const AuthContext = createContext<IAuthContext | undefined>(undefined);

// Hook personalizado para acceder al contexto
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authUser, setAuthUser] = useState<IUser | null>(() => {
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
  return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};
