import bcryptjs from 'bcryptjs';

import { Request, Response } from 'express';
import User from '../models/user.models';

export const signup = async (req: Request, res: Response) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }
    // HASH PASSWORD HERE
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run/
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password,
      gender,
      profilePicture: gender === 'male' ? boyProfilePic : girlProfilePic
    });

    await newUser.save();

    res.status(200).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
      gender: newUser.gender,
      profilePicture: newUser.profilePicture
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error in signup controller', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export const login = (req: Request, res: Response) => {
  console.log('loginUser');
  res.send('loginUser');
};
export const logout = (req: Request, res: Response) => {
  console.log('logoutUser');
  res.send('logoutUser');
};
