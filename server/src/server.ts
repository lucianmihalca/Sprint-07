// Importaciones necesarias
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import connectToMongoDB from './db/connectToMongoDB';

// Inicializar Express
const app = express();

// Definir el puerto a utilizar
const PORT = process.env.PORT || 3000;

// Configurar dotenv para leer variables de entorno
dotenv.config({ path: '../.env' }); // Ajusta la ruta si es necesario

// Middlewares:
app.use(express.json()); // Parsear los body requests como JSON ( de req.body)
app.use('/api/auth', authRoutes); //


// Ruta raíz para verificar que el servidor está funcionando
// app.get('/', (req, res) => {
//   res.send('Hello World 👻 👻');
// });



// Iniciar el servidor
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
