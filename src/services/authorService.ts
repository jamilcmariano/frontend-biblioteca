import { Author } from '../types';
import { API_CONFIG } from '../config/constants';
import { handleResponse } from '../utils/apiUtils';

export const getAuthors = async (): Promise<Author[]> => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/autores`, {
      headers: API_CONFIG.HEADERS,
      mode: 'cors',
    });
    return handleResponse<Author[]>(response);
  } catch (error) {
    throw new Error('Failed to fetch authors. Please try again later.');
  }
};