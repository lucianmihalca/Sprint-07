import { IConversation } from "./conversation.interface";
import { IMessage } from "../message/message.interface";


export interface IConversationState {
    selectedConversation: IConversation | null;
    setSelectedConversation: (selectedConversation: IConversation | null) => void;
    messages: IMessage[];
    setMessages: (messages: IMessage[]) => void;
  }