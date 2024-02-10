import mongoose, { Schema } from 'mongoose';
import { IConversation } from '../interfaces/conversation.interface';

const conversationSchema: Schema = new Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        default: []
      }
    ]
  },
  // createdAt, updatedAt are default
  { timestamps: true }
);

const Conversation = mongoose.model<IConversation>('Conversation', conversationSchema);
export default Conversation;
