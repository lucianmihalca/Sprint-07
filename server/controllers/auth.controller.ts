import { Request, Response } from 'express';

export const signup = async (req: Request, res: Response) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};

export const login = (req: Request, res: Response) => {
  console.log('loginUser');
  res.send('loginUser');
};
export const logout = (req: Request, res: Response) => {
  console.log('logoutUser');
  res.send('logoutUser');
};
