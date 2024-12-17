import React from 'react';
import { Library } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3">
          <Library className="w-8 h-8 text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-900">Biblioteca Digital</h1>
        </div>
      </div>
    </header>
  );
};