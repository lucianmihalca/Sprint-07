// snippet rafce
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ILogin } from '../../interfaces/login/login.interface';
import { loginSchema } from '../../zod/zod.login';
import { loginFormErrors } from '../../interfaces/login/loginError.interfaces';
import useLogin from '../../hooks/useLogin';
import GoogleLoginButton from '../../components/google/Google.button';

const Login: React.FC = () => {
  const [errors, setErrors] = useState<Partial<loginFormErrors>>({});

  const [inputs, setInputs] = useState<ILogin>({
    userName: '',
    password: ''
  });

  const { login, loading } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted form login with data:', inputs);

    await login(inputs);

    // Use Zod to validate the inputs
    const validationResult = loginSchema.safeParse({
      userName: inputs.userName,
      password: inputs.password
    });

    if (!validationResult.success) {
      // Convertir los errores de Zod en un formato más amigable para la UI
      const formattedErrors = validationResult.error.issues.reduce((acc: { [key: string]: string }, current) => {
        acc[current.path[0]] = current.message;
        return acc;
      }, {});

      setErrors(formattedErrors);
      return;
    }

    // If validation is successful, then proceed with login
    // await login(inputs);
    console.log('Validated data:', validationResult.data);

    // Reset the errors
    setErrors({});
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-login">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white opacity-70">User name</span>
            </label>
            <input
              type="text"
              placeholder="Enter user name"
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

          <Link
            to="/signup"
            className="text-sm hover:underline text-white opacity-70 hover:text-black transition duration-700 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner "></span> : 'Login'}
            </button>
          </div>

          <div className="flex items-center justify-center my-4 w-full">
            <div className="flex-1 h-px bg-gray-400" />
            <span className="mx-2 text-white">OR</span>
            <div className="flex-1 h-px bg-gray-400" />
          </div>

          <div className="flex items-center justify-center text-black font-bold py-2 rounded shadow ">
            <GoogleLoginButton />
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
