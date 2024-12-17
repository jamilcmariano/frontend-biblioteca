import { useState, useEffect } from 'react';
import { Book } from '../types/book';
import { FilterType } from '../types/filter';
import { getBooks, getAvailableBooks, getUnavailableBooks } from '../api/books';
import { FILTER_OPTIONS } from '../config/constants';

export const useBooks = (filter: FilterType) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let booksData;
        switch (filter) {
          case FILTER_OPTIONS.AVAILABLE:
            booksData = await getAvailableBooks();
            break;
          case FILTER_OPTIONS.UNAVAILABLE:
            booksData = await getUnavailableBooks();
            break;
          default:
            booksData = await getBooks();
        }
        setBooks(booksData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [filter]);

  return { books, loading, error };
};