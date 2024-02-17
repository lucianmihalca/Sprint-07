import { ISingUp } from '../signup/signUp.interface';
import React from'react';

export interface IAuthContext {
  authUser: ISingUp | null;
  setAuthUser: React.Dispatch<React.SetStateAction<ISingUp | null>>;
}
