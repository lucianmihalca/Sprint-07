import React from 'react';
import { toast } from 'react-hot-toast';
import { ISingUp } from '../interfaces/singUp.interface';
import { useAuthContext } from '../conext/AuthContext';

const useSignup = () => {
  const [loading, setLoading] = React.useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ userName, fullName, password, confirmPassword, gender }: ISingUp) => {
    const success = handleInputErrors({ userName, fullName, password, confirmPassword, gender });
    if (!success) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, userName, password, confirmPassword, gender })
      });
      const data = await res.json();

      if (!res.ok) {
        // Manejo de respuestas no exitosas del servidor
        toast.error(data.message || 'An error occurred during signup');
        return;
      }

      console.log(data);

      // localstorege
      localStorage.setItem('chat-user', JSON.stringify(data));
      // context
      setAuthUser(data);
      toast.success('Registration successful');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputErrors({ userName, fullName, password, confirmPassword, gender }: ISingUp) {
  if (!userName || !fullName || !password || !confirmPassword || !gender) {
    toast.error('Please fill in all fields');
    return false;
  }
  if (password !== confirmPassword) {
    toast.error('Passwords do not match');
    return false;
  }
  if (password.length < 6) {
    toast.error('Password must be at least 6 characters long');
    return false;
  }
  if (!userName.match(/^[a-zA-Z0-9]+$/)) {
    toast.error('Username must be alphanumeric');
    return false;
  }
  return true;
}
