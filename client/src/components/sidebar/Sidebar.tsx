import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      {/* 1- SearchInput component */}
      <SearchInput />
      <div className="divider px-0 bg-slate-600 h-0.25"></div>


      {/* 2- Conversations component */}
       <Conversations />

      {/* 3- Messages component */}
      <LogoutButton />  
    </div>
  );
};

export default Sidebar;
