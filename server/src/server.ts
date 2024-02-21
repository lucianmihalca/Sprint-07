// Importaciones necesarias
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes';
import messageRoutes from './routes/message.routes';
import userRoutes from './routes/user.routes';

//
import connectToMongoDB from './db/connectToMongoDB';
import { app, server } from './socket/socket';



// Configurar dotenv para leer variables de entorno
dotenv.config({ path: '../.env' }); // path ajusta la ruta.
// Definir el puerto a utilizar
const PORT = process.env.PORT || 3000;

console.log(process.env.PORT);
// Middlewares:
app.use(express.json()); // Parsear los body requests como JSON ( de req.body)
app.use(cookieParser());
// app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// Iniciar el servidor
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
