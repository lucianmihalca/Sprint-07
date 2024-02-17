import { create } from 'zustand';
// Importa tus interfaces
import { IConversationState } from '../interfaces/conversation/conversation.state.interface';

const useConversation = create<IConversationState>(set => ({
  selectedConversation: null,
  setSelectedConversation: selectedConversation => set({ selectedConversation }),
  messages: [],
  setMessages: messages => set({ messages })
}));

export default useConversation;
