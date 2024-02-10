import { Request, Response } from 'express';

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const { id } = req.params;
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error in sendMessage controller', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
