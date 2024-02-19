import { Document } from 'mongoose';

export interface IUser extends Document {
  _id?: string;
  fullName: string;
  userName: string;
  password: string;
  gender: string;
  profilePicture?: string;
}
