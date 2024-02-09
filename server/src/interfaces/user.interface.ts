import { Document } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  userName: string;
  password: string;
  gender: string;
  profilePicture: string;
}
