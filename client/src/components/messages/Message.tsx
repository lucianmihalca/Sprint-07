// snippet rafce
import { IMessage } from '../../interfaces/message/message.interface';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }: { message: IMessage }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  if (!authUser) {
    return null;
  }
  const formattedTime = extractTime(message.createdAt);
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePicture = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : '';
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePicture} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
      <div className="chat-footer opacity-90 text-xs flex gap-1 items-center text-gray-900">{formattedTime}</div>
    </div>
  );
};

export default Message;
