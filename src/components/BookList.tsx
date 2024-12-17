import { useState, useEffect } from 'react';
import { Book, Author } from '../types';
import { getAllBooks, getAuthors } from '../services/api';
import BookCard from './BookCard';

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [booksData, authorsData] = await Promise.all([
          getAllBooks(),
          getAuthors(),
        ]);
        setBooks(booksData);
        setAuthors(authorsData);
      } catch (err) {
        setError('Failed to fetch library data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getAuthorName = (authorId: number) => {
    return authors.find(author => author.id === authorId)?.nombre;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map(book => (
        <BookCard
          key={book.id}
          book={book}
          author={getAuthorName(book.autorId)}
        />
      ))}
    </div>
  );
}