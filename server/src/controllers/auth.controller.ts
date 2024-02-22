import bcryptjs from 'bcryptjs';
import { OAuth2Client } from 'google-auth-library';
import { Request, Response } from 'express';
import User from '../models/user.models';
import generateTokenAndSetCookie from '../utils/generateToken';

export const signup = async (req: Request, res: Response) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }
    // HASH PASSWORD HERE
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run/
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePicture: gender === 'male' ? boyProfilePic : girlProfilePic
    });

    if (newUser) {
      // Generate JWT token
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        gender: newUser.gender,
        profilePicture: newUser.profilePicture
      });
    } else {
      res.status(400).json({ error: 'Invalid user data' });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error in signup controller', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isPasswordCorrect = await bcryptjs.compare(password, user?.password || '');

    if (!user || !isPasswordCorrect) {
      res.status(400).json({ error: 'Invalid username or password 👻' });
      return;
    } else {
      // Generate JWT token
      generateTokenAndSetCookie(user._id, res);
      console.log('Respuesta enviada al cliente:', {
        _id: user._id,
        fullName: user.fullName,
        userName: user.userName,
        email: user.email,
        profilePicture: user.profilePicture
        // Otros campos que desees devolver
      });

      res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        userName: user.userName,
        email: user.email,
        profilePicture: user.profilePicture
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error in login controller', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
export const logout = async (req: Request, res: Response) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error in logout controller', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

// Google OAuth

// Asumiendo que tienes tu GOOGLE_CLIENT_ID como variable de entorno
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleSignup = async (req: Request, res: Response) => {
  const { token } = req.body; // El token enviado desde el cliente
  console.log('Token recibido:', token); // Loguear el token recibido
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID // Especifica tu GOOGLE_CLIENT_ID aquí
    });

    const payload = ticket.getPayload();
    if (!payload) throw new Error('Invalid payload from Google');
    // Aquí puedes manejar la lógica de verificación de usuario existente o creación de uno nuevo
    // Por ejemplo:
    let user = await User.findOne({ googleId: payload.sub });
    console.log('Usuario encontrado o nuevo:', user); // Loguear información del usuario

    if (!user) {
      // Si el usuario no existe, crea uno nuevo
      user = new User({
        fullName: payload.name,
        userName: payload.email, // O generar uno basado en el nombre
        googleId: payload.sub,
        email: payload.email,
        profilePicture: payload.picture // URL de la imagen de perfil de Google
        // Configura los campos adicionales según tu modelo
      });
      await user.save();
      console.log('Nuevo usuario creado:', user); // Loguear el nuevo usuario creado
    }

    // Genera un token para el usuario y lo devuelve
    generateTokenAndSetCookie(user._id, res);
    console.log('Respuesta enviada al cliente:');
    
    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      email: user.email,
      profilePicture: user.profilePicture
      // Otros campos que desees devolver
    });
  } catch (error) {
    console.error('Error verifying Google token:', error);
    return res.status(500).json({ error: 'Internal server error during Google authentication' });
  }
};
