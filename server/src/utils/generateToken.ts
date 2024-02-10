import jwt from 'jsonwebtoken';
import { Response } from 'express';

const generateTokenAndSetCookie = (userId: string, res: Response) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
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
