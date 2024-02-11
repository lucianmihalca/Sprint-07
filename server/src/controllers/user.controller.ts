import { ICustomRequest } from '../interfaces/custom.request.interface';
import { Response } from 'express';
import User from '../models/user.models';

export const getUserForSidebar = async (req: ICustomRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'No user found' });
    }
    const loggedInUserId = req.user._id;

    // Filter user except legged in user.
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');

    res.status(200).json(filteredUsers);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error in getUserForSidebar controller', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
