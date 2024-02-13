// snippet rafce
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckBox from './GenderCheckBox';
import { signUpSchema } from '../../validationSchemas/signUpSchema';
import { signUpFormErrors } from '../../interfaces/signUpError.interfces';

const SignUp: React.FC = () => {
  const [errors, setErrors] = useState<signUpFormErrors>({});
  const [inputs, setInputs] = useState({
    name: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
    
    // Use Zod to validate the inputs
    const validationResult = signUpSchema.safeParse({
      name: inputs.name,
      fullName: inputs.fullName,
      password: inputs.password,
      confirmPassword: inputs.confirmPassword
      // space for gender
    });

    if (!validationResult.success) {
      // Convertir los errores de Zod en un formato más amigable para la UI
      const formattedErrors = validationResult.error.issues.reduce((acc: { [key: string]: string }, current) => {
        acc[current.path[0] as string] = current.message;
        return acc;
      }, {});

      setErrors(formattedErrors);
      return;
    }

    // Restablecer los errores si la validación es exitosa
    setErrors({});

    console.log('Validated data:', validationResult.data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-login">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white opacity-70">Full name</span>
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full input input-bordered h-10 "
              value={inputs.fullName}
              onChange={e => setInputs({ ...inputs, fullName: e.target.value })}
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white opacity-70">User name</span>
            </label>
            <input
              type="text"
              placeholder="e.g. John"
              className="w-full input input-bordered h-10 "
              value={inputs.name}
              onChange={e => setInputs({ ...inputs, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white opacity-70">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={e => setInputs({ ...inputs, password: e.target.value })}
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white opacity-70">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={e => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
          </div>

          {/*GENDER CHECKBOX GOES HEAR */}
          <GenderCheckBox />

          <Link to="/login" className="text-sm hover:underline text-white opacity-70 hover:text-black transition duration-700 mt-2 inline-block">
            Alredy have an account?
          </Link>

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
