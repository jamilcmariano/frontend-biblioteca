import React from 'react';

interface BookStatusProps {
  available: boolean;
}

export const BookStatus: React.FC<BookStatusProps> = ({ available }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${
        available
          ? 'bg-green-100 text-green-800'
          : 'bg-red-100 text-red-800'
      }`}
    >
      {available ? 'Disponible' : 'No Disponible'}
    </span>
  );
};