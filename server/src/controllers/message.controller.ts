import { Response } from 'express';
import { ICustomRequest } from '../interfaces/custom.request.interface';
import Conversation from '../models/conversation.model';
import Message from '../models/message.model';

export const sendMessage = async (req: ICustomRequest, res: Response) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user?._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId]
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // SOCKET IO FUNCTIONALITY WILL GO HERE


    // this will run in sequence
    // await conversation.save();
    // await newMessage.save();
  
    // this will run on parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(200).json(newMessage);
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error in sendMessage controller', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};
