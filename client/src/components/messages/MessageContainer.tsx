// snippet rafce

import { useEffect } from 'react';
import useConversation from '../../zustand/useConversation';
import MessageInput from './MessageInput';
import Messages from './Messages';
import { TiMessages } from 'react-icons/ti';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // clear the selected conversation when the component is unmounted
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/*Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-tet">To:</span>
            <span className="text-gray-900 fond-bold">{selectedConversation.fullName}</span>
          </div>

          {/*Messages componte */}
          <Messages />

          {/*MessageInput componente */}
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Mario </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// STARER CODE FOR THIS FILE:
// import MessageInput from './MessageInput';
// import Messages from './Messages';

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       <>
//         {/*Header */}
//         <div className="bg-slate-500 px-4 py-2 mb-2">
//           <span className="label-tet">To:</span>
//           <span className="text-gray-900 fond-bold"> Mario Bro</span>
//         </div>

//         {/*Messages */}
//         <Messages />

//         {/*MessageInput*/}
//         <MessageInput />
//       </>
//     </div>
//   );
// };

// export default MessageContainer;
