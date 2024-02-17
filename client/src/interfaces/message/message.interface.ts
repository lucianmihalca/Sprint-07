export interface IMessage {
  _id: number;
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: Date;
}
