import { useState, useEffect } from 'react';
import { Author } from '../types';
import { getAuthors } from '../services/authorService';
import { useError } from './useError';

const API_URL = import.meta.env.VITE_API_URL;

export const useAuthors = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const { handleError, error } = useError();

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const data = await getAuthors();
        setAuthors(data);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, [handleError]);

  return { authors, loading, error };
};