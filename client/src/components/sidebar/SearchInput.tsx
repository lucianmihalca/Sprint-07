import { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('Search must be at least 3 characters');
    }

    const foundConversation = conversations.find(c => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (foundConversation) {
      setSelectedConversation(foundConversation);
      setSearch('');
    } else toast.error('No such user found');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-blue-500 text-white border-0">
        <IoSearchSharp className="h-6 w-6 online-none" />
      </button>
    </form>
  );
};

export default SearchInput;

// STARTER CODE FOR THIS FILE:
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
//       <button type="submit" className="btn btn-circle bg-blue-login text-white border-0">
//         <IoSearchSharp className="h-6 w-6 online-none" />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
