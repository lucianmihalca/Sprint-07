import { Document } from 'mongoose';

export interface IUser extends Document {
  _id?: string;
  fullName: string;
  userName: string;
  password?: string; // Hacerlo opcional para soportar la autenticación con Google
  gender: string;
  profilePicture?: string;
  googleId?: string; // Campo opcional para almacenar el ID de Google
  email?: string; // Campo opcional para almacenar el correo electrónico de Google
}
