import { useState, useEffect } from 'react';
import { Book } from '../types';
import { getAllBooks } from '../services/bookService';
import { useError } from './useError';

const API_URL = import.meta.env.VITE_API_URL;

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const { handleError, error } = useError();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${API_URL}/libros`);
        const data = await response.json();
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