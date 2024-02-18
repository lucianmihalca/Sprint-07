// snippet rafce
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderRadioButtons from './GenderRadioButtons';
import { signUpSchema } from '../../zod/zod.signUp';
import { IsignUpFormErrors } from '../../interfaces/signup/signUpError.interfces';
import { ISingUp } from '../../interfaces/signup/signUp.interface';
import useSignup from '../../hooks/useSignup';

const SignUp: React.FC = () => {
  // Using Partial to make singUpError interface optional
  const [errors, setErrors] = useState<Partial<IsignUpFormErrors>>({});

  const [inputs, setInputs] = useState<ISingUp>({
    userName: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });
  const { loading, signup } = useSignup();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup(inputs);
    console.log('Submitted form with data:', inputs);

    // Use Zod to validate the inputs
    const validationResult = signUpSchema.safeParse({
      userName: inputs.userName,
      fullName: inputs.fullName,
      password: inputs.password,
      confirmPassword: inputs.confirmPassword,
      gender: inputs.gender
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

    // Reset the errors
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
              value={inputs.userName}
              onChange={e => setInputs({ ...inputs, userName: e.target.value })}
            />
            {errors.userName && <p className="text-red-500">{errors.userName}</p>}
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

          {/*GenderRadioButtons GOES HEAR */}

          <GenderRadioButtons
            gender={inputs.gender}
            setGender={(value: string) => setInputs({ ...inputs, gender: value })}
          />

          {errors.gender && <p className="text-red-500">{errors.gender}</p>}

          <Link
            to="/login"
            className="text-sm hover:underline text-white opacity-70 hover:text-black transition duration-700 mt-2 inline-block"
          >
            Alredy have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : 'Sign Up'}
            </button>
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
