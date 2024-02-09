// Importaciones necesarias
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from '../routes/auth.routes';

// Inicializar Express
const app = express();

// Configurar dotenv para leer variables de entorno
dotenv.config({ path: '../.env' }); // Ajusta la ruta si es necesario

// Definir el puerto a utilizar
const PORT = process.env.PORT || 3000;

// Ruta raíz para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Hello World 👻 👻');
});

// Middleware para rutas de autenticación
app.use('/api/auth', authRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
