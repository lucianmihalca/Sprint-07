// snippet rafce

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-login">ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white opacity-70">User name</span>
            </label>
            <input type="text" placeholder="Enter user name" className="w-full input input-bordered h-10 " />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white opacity-70">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
          </div>
          <a href="#" className="text-sm hover:underline text-white opacity-70 hover:text-black transition duration-700 mt-2 inline-block">
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// STARTER CODE FOR THIS FILE:
// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             Login <span className="text-blue-login">ChatApp</span>
//           </h1>
  
//           <form>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text text-white opacity-70">Username</span>
//               </label>
//               <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10 " />
//             </div>
  
//             <div>
//               <label className="label">
//                 <span className="text-base label-text text-white opacity-70">Password</span>
//               </label>
//               <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//             </div>
//             <a href="#" className="text-sm hover:underline text-white opacity-70 hover:text-black transition duration-700 mt-2 inline-block">
//               {"Don't"} have an account?
//             </a>
//             <div>
//               <button className="btn btn-block btn-sm mt-2">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default Login;