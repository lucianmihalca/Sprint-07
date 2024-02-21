import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const userSchema: Schema<IUser> = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: function () {
      // El password no es requerido si el usuario se autentica mediante Google
      return !this.googleId;
    },
    minlength: 6,
  },
  gender: {
    type: String,
    required: function() {
      // Hacer el campo obligatorio solo si no hay googleId.
      return !this.googleId;
    }
  },
  
  profilePicture: {
    type: String,
    default: '',
  },
  // Campos para soporte de autenticación con Google
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
}, { timestamps: true });

const User = mongoose.model<IUser>('User', userSchema);
export default User;
