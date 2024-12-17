import { Book } from '../types/book';
import { API_URL } from '../config/constants';

export const getBooks = async (): Promise<Book[]> => {
  const response = await fetch(`${API_URL}/libros`);
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  return response.json();
};

export const getAvailableBooks = async (): Promise<Book[]> => {
  const response = await fetch(`${API_URL}/libros/disponibles`);
  if (!response.ok) {
    throw new Error('Failed to fetch available books');
  }
  return response.json();
};

export const getUnavailableBooks = async (): Promise<Book[]> => {
  const response = await fetch(`${API_URL}/libros/nodisponibles`);
  if (!response.ok) {
    throw new Error('Failed to fetch unavailable books');
  }
  return response.json();
};