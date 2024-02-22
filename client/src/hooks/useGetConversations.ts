import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IConversation } from '../interfaces/conversation/conversation.interface';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<IConversation[]>([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token'); // Asume que el token se almacena con esta clave
        const res = await fetch('/api/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};
export default useGetConversations;
