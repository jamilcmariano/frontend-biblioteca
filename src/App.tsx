import React, { useState } from 'react';
import { Library } from 'lucide-react';
import BookList from './components/BookList';

function App() {
  const [filter, setFilter] = useState<'all' | 'available' | 'unavailable'>('all');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Library className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">
              Sistema de Gestión de Biblioteca
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-4 flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('available')}
              className={`px-4 py-2 rounded ${
                filter === 'available' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Disponibles
            </button>
            <button
              onClick={() => setFilter('unavailable')}
              className={`px-4 py-2 rounded ${
                filter === 'unavailable' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              No Disponibles
            </button>
          </div>
          <BookList filter={filter} />
        </div>
      </main>
    </div>
  );
}

export default App;