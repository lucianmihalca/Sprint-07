import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IJwtPayload } from '../interfaces/jwt.playload.interface';
import { CustomRequest } from '../interfaces/custom.request.interface';

import User from '../models/user.models';

const protectRoute = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as IJwtPayload;

    // Verifica que el token decodificado incluya un userId
    if (!decoded ||!decoded.userId) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    (req as CustomRequest).user = user;

    next();
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error in protectRoute middleware', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export default protectRoute;
