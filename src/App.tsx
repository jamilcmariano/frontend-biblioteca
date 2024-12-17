import React, { useState } from 'react';
import { FilterType } from './types/filter';
import { FILTER_OPTIONS } from './config/constants';
import { useBooks } from './hooks/useBooks';
import { useAuthors } from './hooks/useAuthors';
import { getAuthorById } from './utils/authorUtils';

import { Header } from './components/Header/Header';
import { FilterBar } from './components/FilterBar/FilterBar';
import { BookCard } from './components/BookCard/BookCard';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';

function App() {
  const [filter, setFilter] = useState<FilterType>(FILTER_OPTIONS.ALL);
  const { books, loading: booksLoading, error: booksError } = useBooks(filter);
  const { authors, loading: authorsLoading, error: authorsError } = useAuthors();

  const loading = booksLoading || authorsLoading;
  const error = booksError || authorsError;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar filter={filter} onFilterChange={setFilter} />

        {error && <ErrorMessage message={error} />}

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                author={getAuthorById(authors, book.autorId)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;