import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const userSchema: Schema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']
  },
  profilePicture: {
    type: String,
    default: ''
  }
});

const User = mongoose.model<IUser>('User', userSchema);
export default User;
