import jwt from 'jsonwebtoken';
import { Response } from 'express';
import { IJwtPayload } from '../interfaces/jwt.playload.interface';

const generateTokenAndSetCookie = (userId: string, res: Response) => {
  
  // Create a payload
  const playload: IJwtPayload = { userId };

  // Sign the payload with a secret and a expiration time
  const token = jwt.sign(playload, process.env.JWT_SECRET as string, {
    expiresIn: '15d'
  });
  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //ms
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    secure: process.env.NODE_ENV !== 'development', // prevent hijacking
    sameSite: 'strict' // CSRF attacks cross-site request forgery attacks
  });
};

export default generateTokenAndSetCookie;
