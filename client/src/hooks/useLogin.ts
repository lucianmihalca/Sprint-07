import React from 'react';
import { ILogin } from '../interfaces/login/login.interface';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
  const [loading, setLoading] = React.useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ userName, password }: ILogin) => {
    const success = handleInputErrors({ userName, password });
    if (!success) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, password })
      });
      const data = await res.json();

      // Lanza el error del backend => auth.controller.ts
      if (data.error) {
        throw new Error(data.error);
      }

      console.log(data);

      // localstorege
      localStorage.setItem('chat-user', JSON.stringify(data));
      // context
      setAuthUser(data);
      toast.success('Login successful');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

function handleInputErrors({ userName, password }: ILogin) {
  if (!userName || !password) {
    toast.error('All fields are required');
    return false;
  }
  if (!userName.match(/^[a-zA-Z0-9]+$/)) {
    toast.error('Username must be alphanumeric');
    return false;
  }
  if (password.length < 6) {
    toast.error('Password: min 6 characters');
    return false;
  }
  // THIS ARE THE REGULAR EXPRESSIONS FOR PASSWORD VALIDATION
  // if (!password.match(/(?=.*[a-z])/)) {
  //   toast.error('Password must contain: at least one lowercase letter');
  //   return false;
  // }
  // if (!password.match(/(?=.*[A-Z])/)) {
  //   toast.error('Password must contain: at least one uppercase letter');
  //   return false;
  // }
  // if (!password.match(/(?=.*\d)/)) {
  //   toast.error('Password must contain: at least one number');
  //   return false;
  // }
  // if (!password.match(/(?=.*[@$!%*?&])/)) {
  //   toast.error('Password must contain: at least one special character');
  //   return false;
  // }
  return true;
}
