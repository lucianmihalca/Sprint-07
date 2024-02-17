import { toast } from 'react-hot-toast';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
  const [loading, setLoading] = React.useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true); // Iniciar la carga al comienzo del proceso de cierre de sesión
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem('chat-user');
      setAuthUser(null);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};

export default useLogout;
