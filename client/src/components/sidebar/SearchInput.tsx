import { IoSearchSharp } from "react-icons/io5";


const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
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
