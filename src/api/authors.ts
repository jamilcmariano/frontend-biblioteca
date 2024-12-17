import { Author } from '../types/author';
import { API_URL } from '../config/constants';

export const getAuthors = async (): Promise<Author[]> => {
  const response = await fetch(`${API_URL}/autores`);
  if (!response.ok) {
    throw new Error('Failed to fetch authors');
  }
  return response.json();
};