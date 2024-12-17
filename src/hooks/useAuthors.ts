import { useState, useEffect } from 'react';
import { Author } from '../types/author';
import { getAuthors } from '../api/authors';

export const useAuthors = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAuthors();
        setAuthors(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  return { authors, loading, error };
};