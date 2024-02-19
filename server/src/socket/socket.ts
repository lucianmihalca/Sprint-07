import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:8000'],
    methods: ['GET', 'POST']
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

  // Verifica que userId exista y no sea "undefined" como string.
  if (userId !== undefined && userId !== 'undefined') {
    userSocketMap[userId] = socket.id;
  }
  // io.emit() is used to send events to all the connected clients
  io.emit('getOnlineUsers', Object.keys(userSocketMap));

  // socket.on() is used to listen to the events. can be used both on client and server side
  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
    if (userId !== undefined) {
      delete userSocketMap[userId];
    }
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
  });
});

export { app, io, server };
