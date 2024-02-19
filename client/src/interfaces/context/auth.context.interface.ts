import { IUser } from '../usuario/usuario.interface';
import { SetStateAction, Dispatch } from 'react';

export interface IAuthContext {
  authUser: IUser | null;
  setAuthUser: Dispatch<SetStateAction<IUser | null>>;
}
