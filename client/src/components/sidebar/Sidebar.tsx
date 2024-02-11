import SearchInput from './SearchInput';

const Sidebar = () => {
  return (
    <div>
      {/* 1- SearchInput component */}
      <SearchInput />
      <div className="divider px-3 bg-black h-0.25"></div>


      {/* 2- Conversations component */}
      {/* <Conversations />

      {/* 3- Messages component */}
      {/* <LogoutButton />  */}
    </div>
  );
};

export default Sidebar;
