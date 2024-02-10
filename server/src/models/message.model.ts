import mongoose, { Schema } from 'mongoose';
import { IMessage } from '../interfaces/message.interface';

const messageSchema: Schema = new Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  // createdAt, updatedAt are default
  { timestamps: true }
);
const Message = mongoose.model<IMessage>('Message', messageSchema);
export default Message;
