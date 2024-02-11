// snippet rafce

import GenderCheckBox from './GenderCheckBox';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-login">ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white opacity-70">Full name</span>
            </label>
            <input type="text" placeholder="e.g. John Doe" className="w-full input input-bordered h-10 " />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white opacity-70">User name</span>
            </label>
            <input type="text" placeholder="e.g. John" className="w-full input input-bordered h-10 " />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white opacity-70">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white opacity-70">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
          </div>

          {/*GENDER CHECKBOX GOES HEAR */}
          <GenderCheckBox />

          <a href="#" className="text-sm hover:underline text-white opacity-70 hover:text-black transition duration-700 mt-2 inline-block">
            Alredy have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;



// STARTER CODE FOR THIS FILE:
// import GenderCheckBox from './GenderCheckBox';

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-blue-login">ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-white opacity-70">Full name</span>
//             </label>
//             <input type="text" placeholder="e.g. John Doe" className="w-full input input-bordered h-10 " />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-white opacity-70">User name</span>
//             </label>
//             <input type="text" placeholder="e.g. John" className="w-full input input-bordered h-10 " />
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text text-white opacity-70">Password</span>
//             </label>
//             <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text text-white opacity-70">Confirm Password</span>
//             </label>
//             <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
//           </div>

//           {/*GENDER CHECKBOX GOES HEAR */}
//           <GenderCheckBox />

//           <a href="#" className="text-sm hover:underline text-white opacity-70 hover:text-black transition duration-700 mt-2 inline-block">
//             Alredy have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
