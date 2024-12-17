import { Book } from '../types';
import { BookOpen } from 'lucide-react';

interface BookCardProps {
  book: Book;
  author?: string;
}

export default function BookCard({ book, author }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{book.titulo}</h3>
          {author && (
            <p className="text-sm text-gray-600 mt-1">por {author}</p>
          )}
        </div>
        <BookOpen className="w-6 h-6 text-blue-500" />
      </div>
      <div className="mt-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            book.disponible
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {book.disponible ? 'Disponible' : 'No disponible'}
        </span>
      </div>
    </div>
  );
}