import { IUser } from '../usuario/usuario.interface';

export interface ISignUp extends IUser {
  confirmPassword: string;
}
