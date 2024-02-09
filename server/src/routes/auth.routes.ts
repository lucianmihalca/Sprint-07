// Importaciones necesarias
import express from 'express';
import { signup, login, logout } from '../controllers/auth.controller'; // Asegúrate de que la ruta sea correcta

// Inicializar router
const router = express.Router();

// Definición de rutas
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

// Exportar router
export default router;
