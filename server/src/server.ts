// Importaciones necesarias
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes';
import messageRoutes from './routes/message.routes';
import userRoutes from './routes/user.routes';

//
import connectToMongoDB from './db/connectToMongoDB';

// Inicializar Express
const app = express();
// Definir el puerto a utilizar
const PORT = process.env.PORT || 3000;

// Configurar dotenv para leer variables de entorno
dotenv.config({ path: '../.env' }); // path ajusta la ruta.

// Middlewares:
app.use(express.json()); // Parsear los body requests como JSON ( de req.body)
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// Ruta raíz para verificar que el servidor está funcionando
// app.get('/', (req, res) => {
//   res.send('Hello World 👻 👻');
// });

// Iniciar el servidor
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
