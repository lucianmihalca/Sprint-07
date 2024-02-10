import { Document } from 'mongoose';

export interface IConversation extends Document {
  participants: string[];
  messages: string[];
}
