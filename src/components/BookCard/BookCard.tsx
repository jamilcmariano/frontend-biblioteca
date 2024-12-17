import React from 'react';
import { BookOpen } from 'lucide-react';
import { Book } from '../../types/book';
import { Author } from '../../types/author';
import { BookStatus } from './BookStatus';

interface BookCardProps {
  book: Book;
  author: Author;
}

export const BookCard: React.FC<BookCardProps> = ({ book, author }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{book.titulo}</h3>
          <p className="text-gray-600 mt-2">{author.nombre}</p>
          <p className="text-sm text-gray-500">{author.nacionalidad}</p>
        </div>
        <BookOpen className={`w-6 h-6 ${book.disponible ? 'text-green-500' : 'text-red-500'}`} />
      </div>
      <div className="mt-4">
        <BookStatus available={book.disponible} />
      </div>
    </div>
  );
};