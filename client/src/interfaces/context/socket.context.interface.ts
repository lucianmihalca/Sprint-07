import { Socket } from 'socket.io-client';

export interface ISocketContext {
  socket: Socket | null;
  onlineUsers: string[]; // Asumiendo que onlineUsers es un array de IDs de usuario como strings. Ajusta según tus datos.
}
