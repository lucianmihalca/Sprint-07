// snippet rafce

import MessageInput from './MessageInput';
import Messages from './Messages';

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        {/*Header */}
        <div className="bg-slate-500 px-4 py-2 mb-2">
          <span className="label-tet">To:</span>
          <span className="text-gray-900 fond-bold"> Mario Bro</span>
        </div>

        {/*Messages */}
        <Messages />

        {/*MessageInput*/}
        <MessageInput />
      </>
    </div>
  );
};

export default MessageContainer;



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
