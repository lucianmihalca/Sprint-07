import React, { createContext, useState, useEffect, useContext } from 'react';
import { useAuthContext } from './AuthContext';
import io, { Socket } from 'socket.io-client';
import { ISocketContext } from '../interfaces/context/socket.context.interface'; // Asegúrate de que la ruta sea correcta
import { AuthProviderProps } from '../interfaces/context/auth.provider.interface'; // Usando AuthProviderProps

const SocketContext = createContext<ISocketContext | undefined>(undefined);

export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocketContext must be used within a SocketContextProvider');
  }
  return context;
};

export const SocketContextProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser && authUser._id) {
      const socket = io('http://localhost:3000', {
        query: {
          userId: authUser._id
        }
      });

      setSocket(socket);

      // socket.on() is used to listen to the events.
      socket.on('getOnlineUsers', (users: string[]) => {
        setOnlineUsers(users);
      });

      // Cerrar la conexión cuando el componente se desmonta
      return () => {
        socket.close();
		
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
