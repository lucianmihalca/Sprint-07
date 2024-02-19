import { Document } from 'mongoose';

export interface IConversation extends Document {
  _id?: string;
  participants: string[];
  messages: string[];
}
