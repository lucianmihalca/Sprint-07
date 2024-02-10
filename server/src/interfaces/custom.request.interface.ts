
import { Request } from 'express';
import { IUser } from './user.interface'; 

export interface ICustomRequest extends Request {
  user?: IUser;
}
