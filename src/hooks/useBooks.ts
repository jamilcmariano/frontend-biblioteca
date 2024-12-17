import { useState, useEffect } from 'react';
import { Book } from '../types';
import { getAllBooks } from '../services/bookService';
import { useError } from './useError';

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const { handleError, error } = useError();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [handleError]);

  return { books, loading, error };
};