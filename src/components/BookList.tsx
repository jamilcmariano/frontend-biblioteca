import { useBooks } from '../hooks/useBooks';
import { useAuthors } from '../hooks/useAuthors';
import BookCard from './BookCard';
import LoadingSpinner from './ui/LoadingSpinner';
import ErrorMessage from './ui/ErrorMessage';

export default function BookList() {
  const { books, loading: booksLoading, error: booksError } = useBooks();
  const { authors, loading: authorsLoading, error: authorsError } = useAuthors();

  const getAuthorName = (authorId: number) => {
    return authors.find(author => author.id === authorId)?.nombre;
  };

  if (booksLoading || authorsLoading) {
    return <LoadingSpinner />;
  }

  if (booksError || authorsError) {
    return <ErrorMessage message={booksError || authorsError || 'An error occurred'} />;
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