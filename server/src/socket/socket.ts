import { Server } from 'socket.io';
import http from 'http';
import express from 'express';
import cors from 'cors'; // Asegúrate de tener instalado el paquete CORS

const app = express();

// Aplicar el middleware CORS a la aplicación Express para permitir solicitudes CORS para HTTP/HTTPS
app.use(cors({
  origin: 'http://localhost:8000', // Permite solicitudes de este origen específico
  credentials: true, // Permite el envío de cookies y headers de autenticación
  methods: ['GET', 'POST', 'OPTIONS'], // Métodos HTTP permitidos
}));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:8000'], // Configuración de CORS para las conexiones WebSocket
    credentials: true, 
    methods: ['GET', 'POST', 'OPTIONS']
  }
});

export const getReceiverSocketId = (receiverId: string) => {
  return userSocketMap[receiverId];
};

const userSocketMap: Record<string, string> = {}; // {userId: socketId}

io.on('connection', socket => {
  console.log('a user connected', socket.id);

  const userId = Array.isArray(socket.handshake.query.userId)
    ? socket.handshake.query.userId[0] // Toma el primer elemento si es un array.
    : socket.handshake.query.userId; // Usa directamente si es un string.

  if (userId !== undefined && userId !== 'undefined') {
    userSocketMap[userId] = socket.id;
  }

  io.emit('getOnlineUsers', Object.keys(userSocketMap));

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
    if (userId !== undefined) {
      delete userSocketMap[userId];
    }
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
  });
});

export { app, io, server };
